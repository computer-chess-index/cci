# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1940<sub>(+551) | 2201<sub>(+562) | 2307<sub>(+536) |  |
| 1.0.0 | 2025-12-31 | 1389 | 1639 | 1771 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:35:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1389, 1940]
  line "STC (8.0+0.08s)" [1389, 1940]
  line "LTC (60.0+0.60s)" [1639, 2201]
  line "" [1771, 2307]
  line "VLTC (2m24s+1.12s)" [1771, 2307]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2307 | 26 | 520 | 51% | 2306 | 21% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2201 | 27 | 496 | 48% | 2215 | 23% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1940 | 25 | 588 | 48% | 1964 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1771 | 41 | 230 | 41% | 1905 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1639 | 48 | 164 | 43% | 1731 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1389 | 45 | 184 | 40% | 1513 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |