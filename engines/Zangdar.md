# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3290<sub>(+97) | 3448<sub>(+80) | 3491<sub>(+98) |  |
| 6.1.1 | 2026-02-25 | 3193<sub>(+56) | 3368<sub>(+6) | 3393<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3137<sub>(+1) | 3362<sub>(+17) | 3424<sub>(+27) |  |
| 6 | 2026-02-07 | 3136<sub>(+12) | 3345<sub>(+5) | 3397<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3124 | 3340 | 3382 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:55:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3124, 3136, 3137, 3193, 3290]
  line "STC (8.0+0.08s)" [3124, 3136, 3137, 3193, 3290]
  line "LTC (60.0+0.60s)" [3340, 3345, 3362, 3368, 3448]
  line "VLTC (2m24s+1.12s)" [3382, 3397, 3424, 3393, 3491]
  line "VLTC (2m24s+1.12s)" [3382, 3397, 3424, 3393, 3491]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 41 | 140 | 50% | 3492 | 79% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 40 | 150 | 50% | 3447 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3290 | 30 | 284 | 49% | 3294 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3393 | 25 | 394 | 50% | 3391 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 26 | 364 | 51% | 3364 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3193 | 25 | 444 | 51% | 3189 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 31 | 256 | 50% | 3421 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3362 | 27 | 332 | 49% | 3366 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3137 | 32 | 276 | 51% | 3132 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3397 | 36 | 192 | 50% | 3397 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 33 | 228 | 52% | 3335 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3136 | 34 | 244 | 49% | 3141 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 27 | 356 | 54% | 3345 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3340 | 31 | 272 | 51% | 3318 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3124 | 32 | 280 | 55% | 3067 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |