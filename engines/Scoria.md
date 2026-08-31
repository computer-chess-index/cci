# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2309<sub>(+1058) | 2520<sub>(+996) | 2665<sub>(+1017) |  |
| 3.8.51 | 2025-08-10 | 1251 | 1524 | 1648 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scoria+<version>&body=###%20Engine%20name%0AScoria%0A%0A###%20Version%0A4.4.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:39:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "" [1251, 2309]
  line "STC (8.0+0.08s)" [1251, 2309]
  line "LTC (60.0+0.60s)" [1524, 2520]
  line "" [1648, 2665]
  line "VLTC (2m24s+1.12s)" [1648, 2665]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2665 | 33 | 312 | 51% | 2637 | 30% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2520 | 35 | 292 | 55% | 2450 | 30% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2309 | 36 | 256 | 53% | 2249 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 24 | 554 | 45% | 1719 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1524 | 26 | 498 | 49% | 1561 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1251 | 25 | 576 | 54% | 1191 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |