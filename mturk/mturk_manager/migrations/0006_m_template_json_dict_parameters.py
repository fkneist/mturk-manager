# Generated by Django 2.0 on 2018-02-18 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mturk_manager', '0005_m_worker_corpus_viewer_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='m_template',
            name='json_dict_parameters',
            field=models.TextField(default='{}'),
            preserve_default=False,
        ),
    ]