<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue';

const maisonsListe: MaisonRecord[] = [
  {
    adresse: '11 rue de la taniere',
    collectionId: '890f3sg7jaydmnl',
    collectionName: 'maison',
    created: '2024-04-29 14:26:46.338Z',
    favori: false,
    id: 'edmeya8qzfznixw',
    image: '',
    nb_chambres: 23,
    nb_sdb: 23,
    nom_maison: 'la Tanière',
    prix: 470,
    surface: 47,
    updated: '2024-04-29 14:26:46.338Z'
  },
  {
    adresse: '14 rue de la maire',
    collectionId: '890f3sg7jaydmnl',
    collectionName: 'maison',
    created: '2024-05-02 08:25:24.350Z',
    favori: false,
    id: 'sxcznhjss9adcwv',
    image: '',
    nb_chambres: 4,
    nb_sdb: 4,
    nom_maison: 'Biblio',
    prix: 350,
    surface: 45,
    updated: '2024-05-02 08:25:24.350Z'
  },
  {
    adresse: '37 rte de montbe',
    collectionId: '890f3sg7jaydmnl',
    collectionName: 'maison',
    created: '2024-05-02 09:03:55.456Z',
    favori: false,
    id: 'ke9py2jjn435g2r',
    image: '',
    nb_chambres: 14,
    nb_sdb: 14,
    nom_maison: 'Aldo',
    prix: 410,
    surface: 500,
    updated: '2024-05-02 09:03:55.456Z'
  }
]
console.log(maisonsListe)
</script>

<template>
  <div>
    <h1 class="text-2xl">Bonjour monde !</h1>
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.nom" v-bind="uneMaison" />
  </div>
  
</template>
