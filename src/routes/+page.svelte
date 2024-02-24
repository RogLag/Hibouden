<script lang="ts">
    import Button from "../lib/Button.svelte";
</script>

<main class="w-full h-full bg-[#1f2937] flex flex-row">
    <div class="fixed w-367.5 h-213 bg-[#216892]/80 rounded-full ml-[-40rem] mt-[-40rem] blur-[200px]">
    </div>
    <div class="fixed w-367.5 h-213 bg-[#762F63]/80 rounded-full ml-[50rem] mt-[-30rem] blur-[200px]">
    </div>
    <div class="flex flex-col z-10 w-1/2 h-full pl-44 py-32 gap-16 items-center">
        <p class="text-white text-5xl w-172 whitespace-normal leading-[4rem]">Hibouden est un bot discord qui permet le partage de souvenirs ! </p>
        <p class="text-white text-2xl w-172 whitespace-normal leading-[2rem] font-light">Sur ce site vous pouvez regarder toutes les cartes disponibles et regarder les informations relatives à votre compte (pas encore disponible).</p>
        <Button>Cartes</Button>
    </div>
    <div class="flex flex-row h-full w-1/2 items-center py-16 z-10">
        <div class="flex flex-col gap-10 items-center w-full h-full">
            <div class="w-[200px] h-[200px] object-cover bgcustom1"></div>
            <img class="w-[200px] h-[200px] object-cover" src="3PotesAuBar.png" alt="hibouden" />
            <div class="w-[200px] h-[200px] object-cover bgcustom2"></div>
        </div>
    </div>
</main>

<style>
    .bgcustom1 {
        background: linear-gradient(180deg, #5D2D56 0%, rgba(93, 45, 86, 0.00) 100%), url("PierreLouisRoi.png"), lightgray 50% / cover no-repeat;
    }
    .bgcustom2 {
        background: linear-gradient(0deg, #1F2937 0%, rgba(31, 41, 55, 0.00) 100%), url("HugoBolt.png"), lightgray 50% / cover no-repeat;
    }
</style>