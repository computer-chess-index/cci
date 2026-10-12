# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1944<sub>(-82) | 2857<sub>(-40) | 2951<sub>(-6) |  |
| 2 | 2026-10-01 | 2026<sub>(+403) | 2897<sub>(+354) | 2957<sub>(+354) |  |
| 1.1 | 2026-07-11 | 1623 | 2543 | 2603 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2608<sub>(+652) | 3054<sub>(+349) | 3179<sub>(+428) |  |
| 1.1 | 2026-07-11 | 1956 | 2705 | 2751 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-07-11 | 2380<sub>(+283) | 2681<sub>(+248) | 2736<sub>(+197) |  |
| 1.0 | 2026-06-10 | 2097 | 2433 | 2539 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Erinn+<version>&body=###%20Engine%20name%0AErinn%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-12 04:38:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1600 --> 3200
  line "E1: STC (8.0+0.08s)" [1623, 2026, 1944]
  line "E1: LTC (60.0+0.60s)" [2543, 2897, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2603, 2957, 2951]
  line "P1: STC (8.0+0.08s)" [1956, 2608]
  line "P1: LTC (60.0+0.60s)" [2705, 3054]
  line "P1: VLTC (2m24s+1.12s)" [2751, 3179]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2000 --> 2800
  line "T1: STC (8.0+0.08s)" [2097, 2380]
  line "T1: LTC (60.0+0.60s)" [2433, 2681]
  line "T1: VLTC (2m24s+1.12s)" [2539, 2736]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 89 | 44 | 59% | 2865 | 23% |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 79 | 48 | 54% | 3121 | 46% |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 2957 | 66 | 74 | 57% | 2888 | 34% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2857 | 88 | 40 | 60% | 2768 | 40% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 3054 | 83 | 46 | 70% | 2892 | 43% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2897 | 67 | 72 | 59% | 2815 | 35% |
| 2 | STC <sub>(8.0+0.08s)</sub> | 1944 | 109 | 32 | 64% | 1805 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 2608 | 99 | 52 | 70% | 2344 | 2% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 2026 | 64 | 94 | 61% | 1918 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2751 | 45 | 140 | 51% | 2743 | 47% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2603 | 47 | 136 | 53% | 2577 | 44% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 31 | 302 | 50% | 2736 | 52% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2543 | 45 | 156 | 50% | 2541 | 37% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 27 | 404 | 50% | 2688 | 45% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2705 | 50 | 126 | 54% | 2666 | 40% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1623 | 48 | 162 | 46% | 1673 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2380 | 26 | 448 | 47% | 2404 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1956 | 42 | 200 | 49% | 1982 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2539 | 32 | 316 | 50% | 2533 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 30 | 368 | 56% | 2368 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2097 | 36 | 276 | 52% | 2066 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |