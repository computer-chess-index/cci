# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3283<sub>(+15) | 3447<sub>(+4) | 3471<sub>(-3) |  |
| 8.1.0 | 2024-10-28 | 3268<sub>(+24) | 3443<sub>(+19) | 3474<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3244<sub>(+new) | 3424<sub>(+new) | 3474<sub>(+new) |  |
| 7.3.0 | 2024-04-08 |  |  |  |  |
| 7.2.0 | 2024-04-07 |  |  |  |  |
| 7.1.0 | 2024-03-08 |  |  |  |  |
| 7.0.0 | 2024-02-20 |  |  |  |  |
| 6.0.0 | 2023-12-21 |  |  |  |  |
| 5.3.0 | 2023-08-10 |  |  |  |  |
| 5.2.1 | 2023-06-12 |  |  |  |  |
| 5.2.0 | 2023-05-13 |  |  |  |  |
| 5.1.0 | 2023-02-13 |  |  |  |  |
| 5.0.0 | 2022-12-31 |  |  |  |  |
| 4.1.0 | 2022-08-18 |  |  |  |  |
| 4.0.1 | 2022-07-06 |  |  |  |  |
| 4.0.0 | 2022-07-03 |  |  |  |  |
| 3.3.0 | 2022-03-18 |  |  |  |  |
| 3.2.0 | 2022-02-05 |  |  |  |  |
| 3.1.3 | 2022-01-22 |  |  |  |  |
| 3.1.2 | 2022-01-22 |  |  |  |  |
| 3.1.1 | 2022-01-21 |  |  |  |  |
| 3.1.0 | 2021-11-14 |  |  |  |  |
| 3.0.0 | 2021-10-19 |  |  |  |  |
| 2.0.0 | 2021-07-24 |  |  |  |  |
| 1.2.0 | 2021-02-19 |  |  |  |  |
| 1.1.0 | 2020-12-20 |  |  |  |  |
| 1.0.0 | 2020-08-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:30:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3244, 3268, 3283]
  line "STC (8.0+0.08s)" [3244, 3268, 3283]
  line "LTC (60.0+0.60s)" [3424, 3443, 3447]
  line "VLTC (2m24s+1.12s)" [3474, 3474, 3471]
  line "VLTC (2m24s+1.12s)" [3474, 3474, 3471]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 12 | 1620 | 50% | 3472 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 12 | 1672 | 50% | 3444 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3283 | 13 | 1662 | 50% | 3285 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 32 | 228 | 46% | 3501 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 38 | 172 | 51% | 3434 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3268 | 36 | 208 | 48% | 3285 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 33 | 228 | 49% | 3480 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 36 | 192 | 51% | 3416 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3244 | 29 | 308 | 50% | 3245 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |