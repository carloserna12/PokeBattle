from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LoginView, LogoutView
from poke.views import index, team

urlpatterns = [
    path('', views.feed, name='feed'),
    path('profile/', views.profile, name= 'profile'),
    path('profile/<str:username>/', views.profile, name= 'profile'),
    path('register/', views.register, name= 'register'),
    path('login/', LoginView.as_view(template_name='social/login.html'), name= 'login'),
    path('logout/', LogoutView.as_view(template_name='social/logout.html'), name= 'logout'),
    path('index/',views.index, name='ind'),
    path('generarTeam/',views.team, name='team'),
    path('combates/',views.selectCombat, name='combates'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)