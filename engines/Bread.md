# Engine: Bread

Author: 

Home: https://github.com/Nonlinear2/Bread-Engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-03-15 | 3151<sub>(+105) | 3359<sub>(+105) | 3433<sub>(+130) |  |
| 2.1.1 | 2025-12-22 | 3046<sub>(+new) | 3254<sub>(+new) | 3303<sub>(+new) |  |
| 2.1.0 | 2025-12-21 |  |  |  | always disconnects |
| 2.0.0 | 2025-10-18 | 2911<sub>(+new) | 3166<sub>(+new) | 3202<sub>(+new) |  |
| 1.6.0 | 2025-08-26 |  |  |  |  |
| 1.5.0 | 2025-07-13 |  |  |  |  |
| 1.4.0 | 2025-05-05 |  |  |  |  |
| 1.3.0 | 2025-03-05 |  |  |  |  |
| 1.2.0 | 2025-01-04 |  |  |  |  |
| 1.1.0 | 2024-07-29 |  |  |  |  |
| 1.0.0 | 2024-07-20 |  |  |  |  |
| 0.0.10 | 2024-07-19 |  |  |  |  |
| 0.0.9 | 2024-07-13 |  |  |  |  |
| 0.0.8 | 2024-07-12 |  |  |  |  |
| 0.0.7 | 2024-07-02 |  |  |  |  |
| 0.0.6 | 2024-06-26 |  |  |  |  |
| 0.0.5 | 2024-06-22 |  |  |  |  |
| 0.0.4 | 2024-06-18 |  |  |  |  |
| 0.0.3 | 2024-06-10 |  |  |  |  |
| 0.0.2 | 2024-06-08 |  |  |  |  |
| 0.0.1 | 2024-06-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bread+<version>&body=###%20Engine%20name%0ABread%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-13 06:23:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.1", "3.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2911, 3046, 3151]
  line "STC (8.0+0.08s)" [2911, 3046, 3151]
  line "LTC (60.0+0.60s)" [3166, 3254, 3359]
  line "VLTC (2m24s+1.12s)" [3202, 3303, 3433]
  line "VLTC (2m24s+1.12s)" [3202, 3303, 3433]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 25 | 402 | 50% | 3436 | 74% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 26 | 358 | 51% | 3352 | 72% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3151 | 26 | 400 | 50% | 3154 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 30 | 294 | 50% | 3301 | 61% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3254 | 28 | 348 | 50% | 3241 | 55% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 3046 | 28 | 364 | 52% | 3029 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3202 | 37 | 208 | 57% | 3096 | 55% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 40 | 188 | 56% | 3082 | 53% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2911 | 38 | 208 | 51% | 2880 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |