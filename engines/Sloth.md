# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2404<sub>(+95) | 2831<sub>(+93) | 3042<sub>(+187) |  |
| 2.2 | 2026-08-28 | 2309 | 2738 | 2855 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2 | 2026-08-28 | 2642 | 3015 | 3075 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 04:42:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "" [2543, 2579]
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "" [2982, 3021]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
  line "" [2309, 2404]
  line "E1: STC (8.0+0.08s)" [2309, 2404]
  line "E1: LTC (60.0+0.60s)" [2738, 2831]
  line "" [2855, 3042]
  line "E1: VLTC (2m24s+1.12s)" [2855, 3042]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3042 | 151 | 12 | 75% | 2854 | 50% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 2831 | 132 | 16 | 59% | 2759 | 44% |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2404 | 143 | 16 | 53% | 2369 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 36 | 218 | 51% | 3011 | 55% |
| 2.3 | LTC <sub>(60.0+0.60s)</sub> | 2962 | 37 | 210 | 51% | 2958 | 47% |
| 2.3 | STC <sub>(8.0+0.08s)</sub> | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3075 | 40 | 180 | 47% | 3093 | 49% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 33 | 274 | 47% | 2881 | 42% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2982 | 33 | 280 | 51% | 2965 | 43% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 39 | 190 | 49% | 3027 | 47% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2738 | 34 | 270 | 46% | 2762 | 39% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 35 | 246 | 53% | 2853 | 46% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2642 | 45 | 172 | 50% | 2643 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2309 | 35 | 278 | 41% | 2396 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2543 | 33 | 304 | 48% | 2560 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |