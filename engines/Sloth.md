# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2597<sub>(+276) | 2936<sub>(+186) | 3052<sub>(+181) |  |
| 2.2 | 2026-08-28 | 2321 | 2750 | 2871 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2724<sub>(+128) | 3087<sub>(+118) | 3156<sub>(+131) |  |
| 2.2 | 2026-08-28 | 2596 | 2969 | 3025 |  |
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

Generated: 2026-10-13 04:43:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2321, 2597]
  line "E1: LTC (60.0+0.60s)" [2750, 2936]
  line "E1: VLTC (2m24s+1.12s)" [2871, 3052]
  line "P1: STC (8.0+0.08s)" [2596, 2724]
  line "P1: LTC (60.0+0.60s)" [2969, 3087]
  line "P1: VLTC (2m24s+1.12s)" [3025, 3156]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 53 | 104 | 51% | 3040 | 47% |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 67 | 60 | 53% | 3131 | 57% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 47 | 134 | 52% | 2917 | 42% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 3087 | 68 | 60 | 53% | 3074 | 52% |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2724 | 65 | 72 | 54% | 2688 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2597 | 47 | 146 | 57% | 2527 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 36 | 218 | 51% | 3011 | 55% |
| 2.3 | LTC <sub>(60.0+0.60s)</sub> | 2962 | 37 | 210 | 51% | 2958 | 47% |
| 2.3 | STC <sub>(8.0+0.08s)</sub> | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 38 | 208 | 47% | 3040 | 47% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 33 | 282 | 47% | 2894 | 43% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2982 | 33 | 280 | 51% | 2965 | 43% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2969 | 39 | 194 | 49% | 2974 | 46% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2750 | 34 | 270 | 46% | 2774 | 39% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 35 | 246 | 53% | 2853 | 46% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2596 | 44 | 180 | 50% | 2596 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2321 | 35 | 280 | 41% | 2408 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2543 | 33 | 304 | 48% | 2560 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |