# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3128<sub>(+115) | 3336<sub>(+149) | 3367<sub>(+104) |  |
| 3.5 | 2026-06-02 | 3013<sub>(+97) | 3187<sub>(+52) | 3263<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2916<sub>(-26) | 3135<sub>(-29) | 3167<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2942<sub>(+31) | 3164<sub>(+58) | 3185<sub>(+25) |  |
| 3.2 | 2025-12-21 | 2911<sub>(+87) | 3106<sub>(+100) | 3160<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2824<sub>(+75) | 3006<sub>(+71) | 3092<sub>(+133) |  |
| 3.0 | 2025-11-26 | 2749<sub>(+532) | 2935<sub>(+535) | 2959<sub>(+486) |  |
| 2.1 | 2025-10-13 | 2217 | 2400 | 2473 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:27:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2217, 2749, 2824, 2911, 2942, 2916, 3013, 3128]
  line "STC (8.0+0.08s)" [2217, 2749, 2824, 2911, 2942, 2916, 3013, 3128]
  line "LTC (60.0+0.60s)" [2400, 2935, 3006, 3106, 3164, 3135, 3187, 3336]
  line "VLTC (2m24s+1.12s)" [2473, 2959, 3092, 3160, 3185, 3167, 3263, 3367]
  line "VLTC (2m24s+1.12s)" [2473, 2959, 3092, 3160, 3185, 3167, 3263, 3367]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 30 | 282 | 51% | 3359 | 73% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3336 | 31 | 258 | 51% | 3330 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 34 | 240 | 49% | 3136 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 27 | 368 | 49% | 3270 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3187 | 27 | 364 | 51% | 3175 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3013 | 28 | 364 | 49% | 3021 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 35 | 228 | 52% | 3151 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3135 | 42 | 158 | 53% | 3116 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2916 | 41 | 170 | 49% | 2927 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 104 | 24 | 58% | 3121 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 102 | 24 | 54% | 3128 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2942 | 110 | 24 | 50% | 2944 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 35 | 226 | 49% | 3171 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3106 | 33 | 260 | 52% | 3090 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2911 | 33 | 264 | 50% | 2912 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 35 | 232 | 51% | 3085 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3006 | 36 | 212 | 52% | 2989 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2824 | 37 | 224 | 48% | 2842 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2959 | 51 | 128 | 57% | 2881 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 43 | 184 | 59% | 2846 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2749 | 56 | 108 | 53% | 2705 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 57 | 110 | 48% | 2504 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2400 | 58 | 108 | 48% | 2421 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2217 | 62 | 88 | 51% | 2210 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |