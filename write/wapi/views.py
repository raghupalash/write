from rest_framework import status
from .models import User, Blog, Section, Comment
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer, BlogSerializer, CommentSerialzer, SectionSerializer

@api_view(["GET", "POST"])
def section(request, blog):
    """
    Returns all sections, given a blogpost or posts a new section
    """
    if request.method == "GET":
        sections = Section.objects.all().order_by('section_id')
        serializer = SectionSerializer(sections, many=True)
        return Response(serializer.data, safe=False)
    
    elif request.method == "POST":
        serializer = SectionSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            Response(serializer.data, status=status.HTTP_201_CREATED)
        Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)