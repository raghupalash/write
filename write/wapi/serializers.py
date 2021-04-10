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

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["__all__"]

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ["__all__"]

class CommentSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["__all__"]
