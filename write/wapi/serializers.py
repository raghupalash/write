from django.db import models
from .models import User, Blog, Section, Comment
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "contact", "dob", "date_joined")

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "contact", "dob", "password")

class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["heading"]

class CreateSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = [""]
