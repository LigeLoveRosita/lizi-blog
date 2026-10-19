<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import {
	getDefaultHue,
	getDefaultLightness,
	getDefaultSaturation,
	getHue,
	getLightness,
	getSaturation,
	setHue,
	setLightness,
	setSaturation,
} from "@utils/setting-utils";

let hue = getHue();
let saturation = getSaturation();
let lightness = getLightness();
const defaultHue = getDefaultHue();
const defaultSaturation = getDefaultSaturation();
const defaultLightness = getDefaultLightness();

const presets = [
	{ name: "薄荷绿", hue: 150, saturation: 15, lightness: 70 },
	{ name: "天蓝色", hue: 210, saturation: 12, lightness: 70 },
	{ name: "薰衣草", hue: 260, saturation: 14, lightness: 70 },
	{ name: "玫瑰红", hue: 350, saturation: 16, lightness: 70 },
	{ name: "日落橙", hue: 25, saturation: 18, lightness: 70 },
	{ name: "森林绿", hue: 140, saturation: 12, lightness: 65 },
];

function applyPreset(preset: (typeof presets)[0]) {
	hue = preset.hue;
	saturation = preset.saturation;
	lightness = preset.lightness;
}

function resetHue() {
	hue = defaultHue;
}

function resetSaturation() {
	saturation = defaultSaturation;
}

function resetLightness() {
	lightness = defaultLightness;
}

function resetAll() {
	hue = defaultHue;
	saturation = defaultSaturation;
	lightness = defaultLightness;
}

$: if (hue || hue === 0) setHue(hue);
$: if (saturation || saturation === 0) setSaturation(saturation);
$: if (lightness || lightness === 0) setLightness(lightness);
</script>

<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <div class="flex flex-row gap-2 mb-4 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            {i18n(I18nKey.themeColor)}
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md active:scale-90 will-change-transform"
                    class:opacity-0={hue === defaultHue && saturation === defaultSaturation && lightness === defaultLightness}
                    class:pointer-events-none={hue === defaultHue && saturation === defaultSaturation && lightness === defaultLightness}
                    onclick={resetAll}>
                <div class="text-[var(--btn-content)]">
                    <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
                </div>
            </button>
        </div>
        <div class="flex gap-1">
            <div id="hueValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center
            font-bold text-sm items-center text-[var(--btn-content)]">
                {hue}°
            </div>
        </div>
    </div>

    <div class="space-y-4">
        <div>
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm text-[var(--deep-text)]">色相</span>
                <button aria-label="Reset Hue" class="text-xs text-[var(--primary)] hover:underline"
                        class:opacity-0={hue === defaultHue} class:pointer-events-none={hue === defaultHue}
                        onclick={resetHue}>重置</button>
            </div>
            <div class="w-full h-4 px-1 bg-[linear-gradient(to_right,red_0%,yellow_17%,lime_33%,cyan_50%,blue_67%,magenta_83%,red_100%)] rounded select-none">
                <input aria-label="Hue" type="range" min="0" max="360" bind:value={hue}
                       class="slider" style="width: 100%">
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm text-[var(--deep-text)]">饱和度</span>
                <button aria-label="Reset Saturation" class="text-xs text-[var(--primary)] hover:underline"
                        class:opacity-0={saturation === defaultSaturation} class:pointer-events-none={saturation === defaultSaturation}
                        onclick={resetSaturation}>重置</button>
            </div>
            <div class="w-full h-4 px-1 bg-[linear-gradient(to_right,oklch(0.7_0_var(--hue,250)),oklch(0.7_0.2_var(--hue,250)))] rounded select-none">
                <input aria-label="Saturation" type="range" min="0" max="30" bind:value={saturation}
                       class="slider" style="width: 100%">
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm text-[var(--deep-text)]">亮度</span>
                <button aria-label="Reset Lightness" class="text-xs text-[var(--primary)] hover:underline"
                        class:opacity-0={lightness === defaultLightness} class:pointer-events-none={lightness === defaultLightness}
                        onclick={resetLightness}>重置</button>
            </div>
            <div class="w-full h-4 px-1 bg-[linear-gradient(to_right,oklch(0.5_0_var(--hue,250)),oklch(0.9_0_var(--hue,250)))] rounded select-none">
                <input aria-label="Lightness" type="range" min="50" max="90" bind:value={lightness}
                       class="slider" style="width: 100%">
            </div>
        </div>
    </div>

    <div class="mt-5 pt-4 border-t border-[var(--btn-regular-bg)]">
        <span class="text-sm text-[var(--deep-text)] mb-2 block">预设配色</span>
        <div class="flex flex-wrap gap-2">
            {#each presets as preset}
                <button
                    aria-label={preset.name}
                    class="w-8 h-8 rounded-full border-2 border-transparent hover:scale-110 active:scale-95 transition-all"
                    style="background-color: oklch({preset.lightness / 100} {preset.saturation / 100} {preset.hue})"
                    onclick={() => applyPreset(preset)}
                    title={preset.name}
                ></button>
            {/each}
        </div>
    </div>
</div>

<style lang="stylus">
    #display-setting
      input[type="range"]
        -webkit-appearance none
        height 1rem
        background transparent
        cursor pointer

        &::-webkit-slider-thumb
          -webkit-appearance none
          height 1rem
          width 1rem
          border-radius 50%
          background white
          box-shadow 0 2px 6px rgba(0,0,0,0.3)
          border 2px solid white
          margin-top: -4px
          &:hover
            transform scale(1.1)

        &::-moz-range-thumb
          -webkit-appearance none
          height 1rem
          width 1rem
          border-radius 50%
          background white
          box-shadow 0 2px 6px rgba(0,0,0,0.3)
          border 2px solid white

        &::-ms-thumb
          -webkit-appearance none
          height 1rem
          width 1rem
          border-radius 50%
          background white
          box-shadow 0 2px 6px rgba(0,0,0,0.3)
          border 2px solid white

</style>
