# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-04-03 | 2882<sub>(+100) | 3101<sub>(+57) | 3183<sub>(+63) |  |
| 3.0 | 2025-12-21 | 2782<sub>(+new) | 3044<sub>(+new) | 3120<sub>(+new) |  |
| 2.8 | 2019-11-01 |  |  |  |  |
| 2.7 | 2019-04-03 |  |  |  |  |
| 2.6.2 | 2018-11-30 |  |  |  |  |
| 2.6.1 | 2018-09-04 |  |  |  |  |
| 2.6 | 2018-06-26 |  |  |  |  |
| 2.5 | 2018-01-25 |  |  |  |  |
| 2.4 | 2017-11-19 |  |  |  |  |
| 2.3 | 2017-02-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:29:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2782, 2882]
  line "STC (8.0+0.08s)" [2782, 2882]
  line "LTC (60.0+0.60s)" [3044, 3101]
  line "VLTC (2m24s+1.12s)" [3120, 3183]
  line "VLTC (2m24s+1.12s)" [3120, 3183]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3183 | 29 | 348 | 50% | 3183 | 48% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3101 | 28 | 386 | 51% | 3097 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2882 | 28 | 384 | 50% | 2878 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 31 | 318 | 52% | 3102 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3044 | 29 | 344 | 52% | 3024 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2782 | 29 | 386 | 52% | 2750 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |