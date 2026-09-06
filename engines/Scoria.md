# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2299<sub>(+1046) | 2527<sub>(+1001) | 2662<sub>(+1012) |  |
| 3.8.51 | 2025-08-10 | 1253 | 1526 | 1650 |  |
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

Generated: 2026-09-06 04:38:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "" [1253, 2299]
  line "STC (8.0+0.08s)" [1253, 2299]
  line "LTC (60.0+0.60s)" [1526, 2527]
  line "" [1650, 2662]
  line "VLTC (2m24s+1.12s)" [1650, 2662]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2662 | 32 | 328 | 50% | 2642 | 30% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2527 | 34 | 304 | 55% | 2456 | 31% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2299 | 35 | 272 | 52% | 2252 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1650 | 24 | 554 | 45% | 1719 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1526 | 26 | 498 | 49% | 1561 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1253 | 25 | 576 | 54% | 1191 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |