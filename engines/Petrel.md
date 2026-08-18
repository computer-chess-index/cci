# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3128<sub>(+115) | 3336<sub>(+150) | 3367<sub>(+105) |  |
| 3.5 | 2026-06-02 | 3013<sub>(+97) | 3186<sub>(+51) | 3262<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2916<sub>(-24) | 3135<sub>(-28) | 3166<sub>(-19) |  |
| 3.3 | 2026-02-09 | 2940<sub>(+29) | 3163<sub>(+58) | 3185<sub>(+25) |  |
| 3.2 | 2025-12-21 | 2911<sub>(+87) | 3105<sub>(+99) | 3160<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2824<sub>(+75) | 3006<sub>(+71) | 3092<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2749<sub>(+532) | 2935<sub>(+535) | 2958<sub>(+485) |  |
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

Generated: 2026-08-18 06:27:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2217, 2749, 2824, 2911, 2940, 2916, 3013, 3128]
  line "STC (8.0+0.08s)" [2217, 2749, 2824, 2911, 2940, 2916, 3013, 3128]
  line "LTC (60.0+0.60s)" [2400, 2935, 3006, 3105, 3163, 3135, 3186, 3336]
  line "VLTC (2m24s+1.12s)" [2473, 2958, 3092, 3160, 3185, 3166, 3262, 3367]
  line "VLTC (2m24s+1.12s)" [2473, 2958, 3092, 3160, 3185, 3166, 3262, 3367]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 30 | 282 | 51% | 3359 | 73% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3336 | 31 | 258 | 51% | 3330 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 34 | 240 | 49% | 3135 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 27 | 368 | 49% | 3268 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3186 | 27 | 364 | 51% | 3175 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3013 | 28 | 364 | 49% | 3020 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3166 | 35 | 228 | 52% | 3150 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3135 | 42 | 158 | 53% | 3116 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2916 | 41 | 170 | 49% | 2927 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3185 | 104 | 24 | 58% | 3121 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3163 | 102 | 24 | 54% | 3127 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2940 | 110 | 24 | 50% | 2944 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3160 | 35 | 226 | 49% | 3171 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3105 | 33 | 260 | 52% | 3090 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2911 | 33 | 264 | 50% | 2912 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3092 | 35 | 232 | 51% | 3083 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3006 | 36 | 212 | 52% | 2988 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2824 | 37 | 224 | 48% | 2842 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2958 | 51 | 128 | 57% | 2881 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 43 | 184 | 59% | 2844 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2749 | 56 | 108 | 53% | 2705 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 57 | 110 | 48% | 2504 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2400 | 58 | 108 | 48% | 2421 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2217 | 62 | 88 | 51% | 2210 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |