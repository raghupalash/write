# Generated by Django 3.1.2 on 2021-04-14 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wapi', '0009_auto_20210414_1041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='heading',
            field=models.CharField(blank=True, max_length=64),
        ),
    ]
