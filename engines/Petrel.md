# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3127<sub>(+110) | 3337<sub>(+147) | 3370<sub>(+103) |  |
| 3.5 | 2026-06-02 | 3017<sub>(+97) | 3190<sub>(+51) | 3267<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2920<sub>(-26) | 3139<sub>(-29) | 3171<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2946<sub>(+31) | 3168<sub>(+58) | 3189<sub>(+25) |  |
| 3.2 | 2025-12-21 | 2915<sub>(+87) | 3110<sub>(+99) | 3164<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2828<sub>(+75) | 3011<sub>(+72) | 3096<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2753<sub>(+534) | 2939<sub>(+535) | 2962<sub>(+483) |  |
| 2.1 | 2025-10-13 | 2219 | 2404 | 2479 |  |
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

Generated: 2026-08-25 06:28:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2219, 2753, 2828, 2915, 2946, 2920, 3017, 3127]
  line "STC (8.0+0.08s)" [2219, 2753, 2828, 2915, 2946, 2920, 3017, 3127]
  line "LTC (60.0+0.60s)" [2404, 2939, 3011, 3110, 3168, 3139, 3190, 3337]
  line "VLTC (2m24s+1.12s)" [2479, 2962, 3096, 3164, 3189, 3171, 3267, 3370]
  line "VLTC (2m24s+1.12s)" [2479, 2962, 3096, 3164, 3189, 3171, 3267, 3370]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 29 | 302 | 51% | 3364 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 30 | 274 | 50% | 3335 | 73% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 32 | 276 | 48% | 3137 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 27 | 368 | 49% | 3274 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 27 | 364 | 51% | 3179 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3017 | 28 | 364 | 49% | 3024 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 35 | 228 | 52% | 3155 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3139 | 42 | 158 | 53% | 3120 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2920 | 41 | 170 | 49% | 2931 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3189 | 104 | 24 | 58% | 3125 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3168 | 102 | 24 | 54% | 3132 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2946 | 110 | 24 | 50% | 2948 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 35 | 226 | 49% | 3175 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3110 | 33 | 260 | 52% | 3094 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2915 | 33 | 264 | 50% | 2916 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 35 | 232 | 51% | 3089 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3011 | 36 | 212 | 52% | 2993 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2828 | 37 | 224 | 48% | 2846 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2962 | 51 | 128 | 57% | 2885 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 43 | 184 | 59% | 2849 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2753 | 56 | 108 | 53% | 2709 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2479 | 57 | 110 | 48% | 2508 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2404 | 58 | 108 | 48% | 2425 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2219 | 62 | 88 | 51% | 2214 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |