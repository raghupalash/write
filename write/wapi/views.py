from django.http.response import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from .models import User, Blog, Section, Comment
from .serializers import CreateSectionSerializer, UserSerializer, CreateUserSerializer, CreateBlogSerializer


@api_view(["GET", "POST"])
def user(request):
    if request.method == "POST":
        serializer = CreateUserSerializer(data=request.data)
        wantTo = serializer.initial_data.get('wantTo')
        username = serializer.initial_data.get('username')
        password = serializer.initial_data.get('password')
        if wantTo == 'signup':
            if serializer.is_valid():
                contact = serializer.data.get('contact')
                dob = serializer.data.get('dob')
                user = User.objects.create_user(username=username, contact=contact, dob=dob, password=password)
                user.save()
                login(request, user)
                return Response({"message": "registered!"}, status=status.HTTP_200_OK) 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({"message": "logged in"}, status=status.HTTP_200_OK)
            else:
                return Response({"Bad Request": 'Invalid username and/or password'}, status=status.HTTP_400_BAD_REQUEST)

    querySet = User.objects.all()
    serializer = UserSerializer(querySet, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def user_logged_in(request):
    data = {
        "isAuth": request.user.is_authenticated,
    }
    return JsonResponse(data, status=status.HTTP_200_OK)

@api_view(["GET", "POST"]) 
def blog(request):
    if request.method == "POST":
        serializer = CreateBlogSerializer(data=request.data)
        if serializer.is_valid():
            heading = serializer.data.get("heading")
            if heading != "":
                blog = Blog(heading=heading, creator=request.user)
                blog.save()
                return Response({
                    "blog_id": blog.pk,
                    "message": "Blog Created!"
                })
            return Response({"error": "empty string"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors)

@api_view(["GET", "POST"])
def section(request, blog_id):
    if request.method == "POST":
        blog = Blog.objects.get(pk=blog_id)
        serializer = CreateSectionSerializer(data=request.data)
        if serializer.is_valid():
            # Counting all the section objects
            section_objects = Section.objects.filter(belongs_to=blog)
            section = Section(
                section_id = len(section_objects),
                heading = serializer.data.get("heading"),
                heading_size = serializer.data.get("heading_size"),
                paragraph = serializer.data.get("paragraph"),
                belongs_to = blog
            )
            section.save()
            return Response({"message": "saved!"}, status=status.HTTP_200_OK)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
