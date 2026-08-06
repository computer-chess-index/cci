# Engine: Berserk

Author: Jay Honnold

Home: https://github.com/jhonnold/berserk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.7.0 | 2026-05-24 |  |  |  |  |
| 14 | 2026-05-24 | 3417<sub>(+1836) | 3532<sub>(+17) | 3564<sub>(+24) |  |
| 13 | 2024-03-31 | 1581<sub>(+new) | 3515<sub>(+new) | 3540<sub>(+new) |  |
| 12.1 | 2023-11-12 |  |  |  |  |
| 12 | 2023-10-26 |  |  |  |  |
| 11.1 | 2023-02-21 |  |  |  |  |
| 11 | 2023-02-17 |  |  |  |  |
| 10 | 2022-10-04 |  |  |  |  |
| 9 | 2022-06-15 |  |  |  |  |
| 8.5.1 | 2022-01-03 |  |  |  |  |
| 8.5 | 2021-12-30 |  |  |  |  |
| 8 | 2021-12-05 |  |  |  |  |
| 7 | 2021-11-05 |  |  |  |  |
| 6 | 2021-10-19 |  |  |  |  |
| 5 | 2021-10-19 |  |  |  |  |
| 4.6.0 | 2021-09-18 |  |  |  |  |
| 4.5.1 | 2021-07-22 |  |  |  |  |
| 4.5.0 | 2021-07-21 |  |  |  |  |
| 4.4.0 | 2021-07-10 |  |  |  |  |
| 4.3.0 | 2021-07-03 |  |  |  |  |
| 4.2.0 | 2021-05-25 |  |  |  |  |
| 4.1.0 | 2021-05-02 |  |  |  |  |
| 4.0.0 | 2021-04-27 |  |  |  |  |
| 3.3.0 | 2021-04-10 |  |  |  |  |
| 3.2.1 | 2021-03-30 |  |  |  |  |
| 3.2.0 | 2021-03-25 |  |  |  |  |
| 3.1.0 | 2021-03-22 |  |  |  |  |
| 3.0.0 | 2021-03-19 |  |  |  |  |
| 2.0.0 | 2021-03-04 |  |  |  |  |
| 1.2.2 | 2021-02-21 |  |  |  |  |
| 1.2.1 | 2021-02-20 |  |  |  |  |
| 1.2.0 | 2021-02-20 |  |  |  |  |
| 1.0.0 | 2021-02-17 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Berserk+<version>&body=###%20Engine%20name%0ABerserk%0A%0A###%20Version%0A4.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:23:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13", "14"]
  y-axis "Elo Rating" 1500 --> 3600
  line "STC (8.0+0.08s)" [1581, 3417]
  line "STC (8.0+0.08s)" [1581, 3417]
  line "LTC (60.0+0.60s)" [3515, 3532]
  line "VLTC (2m24s+1.12s)" [3540, 3564]
  line "VLTC (2m24s+1.12s)" [3540, 3564]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | VLTC <sub>(2m24s+1.12s)</sub> | 3564 | 31 | 232 | 51% | 3559 | 93% |
| 14 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 32 | 216 | 50% | 3532 | 90% |
| 14 | STC <sub>(8.0+0.08s)</sub> | 3417 | 26 | 362 | 53% | 3336 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 13 | 1458 | 53% | 3465 | 84% |
| 13 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 12 | 1740 | 51% | 3510 | 87% |
| 13 | STC <sub>(8.0+0.08s)</sub> | 1581 | 15 | 1932 | 53% | 1542 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |