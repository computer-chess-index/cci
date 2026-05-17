# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2026-05-11 | 2788<sub>(-2) | 2993<sub>(-18) | 3101<sub>(+20) |  |
| 1.10 | 2026-02-21 | 2790<sub>(+new) | 3011<sub>(+new) | 3081<sub>(+new) |  |
| 1.9.1 | 2022-08-19 |  |  |  |  |
| 1.9 | 2022-07-23 |  |  |  |  |
| 1.8 | 2021-06-24 |  |  |  |  |
| TCEC19_1 | 2020-08-05 |  |  |  |  |
| 1.7 | 2020-07-12 |  |  |  |  |
| 1.6 | 2020-02-01 |  |  |  |  |
| 1.5 | 2019-12-07 |  |  |  |  |
| 1.4 | 2019-11-19 |  |  |  |  |
| 1.3 | 2019-09-10 |  |  |  |  |
| 1.2 | 2019-08-16 |  |  |  |  |
| 1.1 | 2019-07-02 |  |  |  |  |
| 1.0 | 2019-01-02 |  |  |  |  |
| 0.9 | 2017-08-09 |  |  |  |  |
| 0.8 | 2017-06-18 |  |  |  |  |
| 0.8 | 2017-06-18 |  |  |  |  |
| 0.7 | 2017-05-09 |  |  |  |  |
| 0.7 | 2017-05-09 |  |  |  |  |
| 0.7 | 2017-05-09 |  |  |  |  |
| 0.6 | 2017-03-13 |  |  |  |  |
| 0.6 | 2017-03-13 |  |  |  |  |
| 0.6 | 2017-03-13 |  |  |  |  |
| 0.5 | 2017-02-23 |  |  |  |  |
| 0.5 | 2017-02-23 |  |  |  |  |
| 0.5 | 2017-02-23 |  |  |  |  |
| 0.4 | 2017-02-18 |  |  |  |  |
| 0.4 | 2017-02-18 |  |  |  |  |
| 0.4 | 2017-02-18 |  |  |  |  |
| 0.3 | 2017-02-11 |  |  |  |  |
| 0.3 | 2017-02-11 |  |  |  |  |
| 0.3 | 2017-02-11 |  |  |  |  |
| 0.2 | 2017-02-03 |  |  |  |  |
| 0.2 | 2017-02-03 |  |  |  |  |
| 0.1 | 2017-01-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Roc+<version>&body=###%20Engine%20name%0ARoc%0A%0A###%20Version%0A1.11" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:27:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2790, 2788]
  line "STC (8.0+0.08s)" [2790, 2788]
  line "LTC (60.0+0.60s)" [3011, 2993]
  line "VLTC (2m24s+1.12s)" [3081, 3101]
  line "VLTC (2m24s+1.12s)" [3081, 3101]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | 3101 | 29 | 368 | 51% | 3094 | 39% |
| 1.11 | LTC <sub>(60.0+0.60s)</sub> | 2993 | 33 | 300 | 52% | 2974 | 35% |
| 1.11 | STC <sub>(8.0+0.08s)</sub> | 2788 | 35 | 250 | 51% | 2782 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | 3081 | 26 | 454 | 52% | 3066 | 40% |
| 1.10 | LTC <sub>(60.0+0.60s)</sub> | 3011 | 28 | 386 | 50% | 3011 | 41% |
| 1.10 | STC <sub>(8.0+0.08s)</sub> | 2790 | 27 | 446 | 53% | 2755 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |