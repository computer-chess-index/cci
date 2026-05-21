# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3349<sub>(+75) | 3510<sub>(+53) | 3537<sub>(+24) |  |
| 15.0.0 | 2025-09-01 | 3274<sub>(+new) | 3457<sub>(+new) | 3513<sub>(+new) |  |
| 14 | 2025-07-28 |  |  |  |  |
| 13 | 2025-06-24 |  |  |  |  |
| 12 | 2024-08-01 |  |  |  |  |
| 11 | 2022-10-09 |  |  |  |  |
| 10 | 2021-03-04 |  |  |  |  |
| 9 | 2020-12-18 |  |  |  |  |
| 8.1 | 2020-11-11 |  |  |  |  |
| 8 | 2020-10-27 |  |  |  |  |
| 7 | 2020-09-22 |  |  |  |  |
| 6 | 2020-08-12 |  |  |  |  |
| 5 | 2020-07-14 |  |  |  |  |
| 4 | 2020-06-22 |  |  |  |  |
| 3.0 | 2020-01-06 |  |  |  |  |
| 2.7 | 2019-12-11 |  |  |  |  |
| 2.6.2a | 2019-07-03 |  |  |  |  |
| 2.5 | 2019-06-27 |  |  |  |  |
| 2.4 | 2019-06-19 |  |  |  |  |
| 2.3 | 2019-06-08 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-21 06:24:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3274, 3349]
  line "STC (8.0+0.08s)" [3274, 3349]
  line "LTC (60.0+0.60s)" [3457, 3510]
  line "VLTC (2m24s+1.12s)" [3513, 3537]
  line "VLTC (2m24s+1.12s)" [3513, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 23 | 422 | 50% | 3536 | 88% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 23 | 436 | 50% | 3509 | 85% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3349 | 23 | 468 | 49% | 3352 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 27 | 324 | 52% | 3495 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 30 | 276 | 52% | 3438 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3274 | 32 | 256 | 54% | 3235 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |