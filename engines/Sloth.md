# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2561<sub>(+244) | 2959<sub>(+213) | 3067<sub>(+201) |  |
| 2.2 | 2026-08-28 | 2317 | 2746 | 2866 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2758<sub>(+151) | 3086<sub>(+109) | 3128<sub>(+93) |  |
| 2.2 | 2026-08-28 | 2607 | 2977 | 3035 |  |
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

Generated: 2026-10-12 04:42:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2317, 2561]
  line "E1: LTC (60.0+0.60s)" [2746, 2959]
  line "E1: VLTC (2m24s+1.12s)" [2866, 3067]
  line "P1: STC (8.0+0.08s)" [2607, 2758]
  line "P1: LTC (60.0+0.60s)" [2977, 3086]
  line "P1: VLTC (2m24s+1.12s)" [3035, 3128]
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
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 60 | 80 | 55% | 3027 | 48% |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3128 | 85 | 36 | 49% | 3135 | 58% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 2959 | 64 | 76 | 57% | 2898 | 38% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 3086 | 77 | 48 | 51% | 3085 | 48% |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2561 | 66 | 76 | 60% | 2466 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2758 | 81 | 48 | 60% | 2673 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 36 | 218 | 51% | 3011 | 55% |
| 2.3 | LTC <sub>(60.0+0.60s)</sub> | 2962 | 37 | 210 | 51% | 2958 | 47% |
| 2.3 | STC <sub>(8.0+0.08s)</sub> | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2982 | 33 | 280 | 51% | 2965 | 43% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3035 | 38 | 208 | 47% | 3050 | 47% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 33 | 278 | 47% | 2890 | 42% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2977 | 39 | 194 | 49% | 2982 | 46% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 34 | 270 | 46% | 2772 | 39% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 35 | 246 | 53% | 2853 | 46% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2607 | 44 | 180 | 50% | 2607 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2317 | 35 | 280 | 41% | 2403 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2543 | 33 | 304 | 48% | 2560 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |