# Engine: Roc

Author: Tom Hyer

Home: https://github.com/TomHyer/Roc

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 2026-05-11 | 2728<sub>(-11) | 2947<sub>(-11) | 3038<sub>(+10) |  |
| 1.10 | 2026-02-21 | 2739<sub>(+new) | 2958<sub>(+new) | 3028<sub>(+new) |  |
| TCEC19_1 | 2020-08-05 |  |  |  |  |
| 1.0 | 2019-01-02 |  |  |  |  |
| 0.8 | 2017-06-18 |  |  |  |  |
| 0.7 | 2017-05-09 |  |  |  |  |
| 0.6 | 2017-03-13 |  |  |  |  |
| 0.5 | 2017-02-23 |  |  |  |  |
| 0.4 | 2017-02-18 |  |  |  |  |
| 0.3 | 2017-02-11 |  |  |  |  |
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

Generated: 2026-09-06 06:27:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.10", "1.11"]
  y-axis "Elo Rating" 2700 --> 3100
  line "" [2739, 2728]
  line "STC (8.0+0.08s)" [2739, 2728]
  line "LTC (60.0+0.60s)" [2958, 2947]
  line "" [3028, 3038]
  line "VLTC (2m24s+1.12s)" [3028, 3038]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.11 | VLTC <sub>(2m24s+1.12s)</sub> | 3038 | 25 | 492 | 49% | 3044 | 39% |
| 1.11 | LTC <sub>(60.0+0.60s)</sub> | 2947 | 25 | 496 | 52% | 2934 | 37% |
| 1.11 | STC <sub>(8.0+0.08s)</sub> | 2728 | 26 | 462 | 49% | 2736 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.10 | VLTC <sub>(2m24s+1.12s)</sub> | 3028 | 26 | 454 | 52% | 3015 | 40% |
| 1.10 | LTC <sub>(60.0+0.60s)</sub> | 2958 | 28 | 386 | 50% | 2958 | 41% |
| 1.10 | STC <sub>(8.0+0.08s)</sub> | 2739 | 27 | 446 | 53% | 2703 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |