from django.db import models
from .models import User, Blog, Section, Comment
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["username", "contact", "dob", "date_joined"]

class CreateUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["username", "contact", "dob", "password"]

class BlogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Blog
        fields = ["__all__"]

class SectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Section
        fields = ["__all__"]

class CommentSerialzer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ["__all__"]
