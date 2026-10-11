# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2680 | 3054 | 3135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2944 | 3276 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2865<sub>(+29) | 3137<sub>(+78) | 3186<sub>(+47) |  |
| 3.1 | 2026-04-03 | 2836<sub>(+100) | 3059<sub>(+58) | 3139<sub>(+62) |  |
| 3.0 | 2025-12-21 | 2736 | 3001 | 3077 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-11 17:22:31

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "T1: STC (8.0+0.08s)" [2736, 2836, 2865]
  line "T1: LTC (60.0+0.60s)" [3001, 3059, 3137]
  line "T1: VLTC (2m24s+1.12s)" [3077, 3139, 3186]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3186 | 27 | 386 | 49% | 3191 | 53% |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3347 | 45 | 148 | 51% | 3314 | 51% |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3135 | 36 | 239 | 56% | 3044 | 44% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3137 | 27 | 400 | 51% | 3132 | 50% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3276 | 41 | 188 | 54% | 3208 | 39% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 37 | 250 | 56% | 2947 | 36% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2865 | 25 | 492 | 50% | 2867 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2944 | 42 | 178 | 49% | 2959 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2680 | 33 | 300 | 44% | 2736 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3139 | 29 | 352 | 50% | 3140 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3059 | 27 | 406 | 50% | 3056 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2836 | 28 | 384 | 50% | 2832 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3077 | 31 | 318 | 52% | 3059 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3001 | 29 | 344 | 52% | 2981 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2736 | 29 | 386 | 52% | 2705 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |