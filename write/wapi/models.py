from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.fields import related

# Create your models here.
class User(AbstractUser):
    contact = models.CharField(unique=True, blank=False, max_length=64)
    dob = models.DateField(blank=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    REQUIRED_FIELDS = ['dob']

class Blog(models.Model):
    heading = models.CharField(max_length=64)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="blogs")
    likes = models.IntegerField(null=True)
    liked_by = models.ManyToManyField(User, related_name="blogs_liked", null=True)
    created = models.DateTimeField(auto_now_add=True)
    
class Section(models.Model):
    section_id = models.IntegerField()
    section_count = models.IntegerField()
    heading = models.CharField(max_length=64)
    heading_size = models.CharField(max_length=2)
    paragraph = models.CharField(max_length=1024)
    belongs_to = models.ForeignKey(Blog, on_delete=CASCADE, related_name="sections")

class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=CASCADE, related_name="replies")
    text = models.CharField(max_length=144)
    likes = models.IntegerField()
    liked_by = models.ManyToManyField(User, related_name="comments_made")
    

