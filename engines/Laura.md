# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1729<sub>(+155) | 1889<sub>(+188) | 1989<sub>(+175) |  |
| 3.0.0 | 2026-04-29 | 1574<sub>(+213) | 1701<sub>(+32) | 1814<sub>(+121) |  |
| 2.0.0 | 2026-04-23 | 1361<sub>(+60) | 1669<sub>(+188) | 1693<sub>(+281) |  |
| 1.1.0 | 2026-01-26 | 1301 | 1481 | 1412 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:39:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1300 --> 2000
  line "" [1301, 1361, 1574, 1729]
  line "STC (8.0+0.08s)" [1301, 1361, 1574, 1729]
  line "LTC (60.0+0.60s)" [1481, 1669, 1701, 1889]
  line "" [1412, 1693, 1814, 1989]
  line "VLTC (2m24s+1.12s)" [1412, 1693, 1814, 1989]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1989 | 39 | 238 | 50% | 1994 | 19% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1889 | 38 | 268 | 48% | 1909 | 13% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1729 | 37 | 280 | 51% | 1724 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1814 | 51 | 152 | 50% | 1796 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1701 | 53 | 136 | 50% | 1709 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1574 | 54 | 126 | 49% | 1582 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1693 | 56 | 98 | 53% | 1674 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1669 | 55 | 104 | 48% | 1696 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1361 | 56 | 108 | 55% | 1292 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1412 | 52 | 132 | 43% | 1588 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1481 | 51 | 134 | 43% | 1609 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1301 | 62 | 134 | 47% | 1346 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |