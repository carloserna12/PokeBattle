from django.apps import AppConfig


class PokeConfig(AppConfig):
    
    name = 'poke'

    def ready(self):
        import poke.signals

