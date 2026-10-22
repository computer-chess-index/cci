# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1944<sub>(-220) | 2857<sub>(-90) | 2951<sub>(-80) |  |
| 2 | 2026-10-01 | 2164<sub>(+470) | 2947<sub>(+321) | 3031<sub>(+344) |  |
| 1.1 | 2026-07-11 | 1694 | 2626 | 2687 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2507<sub>(+576) | 3024<sub>(+323) | 3133<sub>(+388) |  |
| 1.1 | 2026-07-11 | 1931 | 2701 | 2745 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-10-22 04:38:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1600 --> 3200
  line "E1: STC (8.0+0.08s)" [1694, 2164, 1944]
  line "E1: LTC (60.0+0.60s)" [2626, 2947, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2687, 3031, 2951]
  line "P1: STC (8.0+0.08s)" [1931, 2507]
  line "P1: LTC (60.0+0.60s)" [2701, 3024]
  line "P1: VLTC (2m24s+1.12s)" [2745, 3133]
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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2951 | 89 | 44 | 59% | 2865 | 23% |
|  |  | P1 | 3133 | 42 | 168 | 47% | 3151 | 46% |
|  |  | E1 | 3031 | 39 | 196 | 53% | 3004 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2857 | 88 | 40 | 60% | 2768 | 40% |
|  |  | P1 | 3024 | 43 | 162 | 54% | 2988 | 46% |
|  |  | E1 | 2947 | 34 | 260 | 50% | 2946 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1944 | 109 | 32 | 64% | 1805 | 16% |
|  |  | P1 | 2507 | 47 | 172 | 52% | 2473 | 15% |
|  |  | E1 | 2164 | 37 | 290 | 57% | 2095 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2745 | 45 | 140 | 51% | 2736 | 47% |
|  |  | E1 | 2687 | 46 | 140 | 53% | 2662 | 46% |
|  |  | T1 | 2736 | 31 | 302 | 50% | 2736 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2626 | 45 | 156 | 50% | 2624 | 37% |
|  |  | T1 | 2681 | 27 | 404 | 50% | 2688 | 45% |
|  |  | P1 | 2701 | 50 | 126 | 54% | 2662 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1694 | 48 | 162 | 46% | 1744 | 17% |
|  |  | T1 | 2380 | 26 | 448 | 47% | 2404 | 40% |
|  |  | P1 | 1931 | 42 | 200 | 49% | 1958 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2539 | 32 | 316 | 50% | 2533 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2433 | 30 | 368 | 56% | 2368 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2097 | 36 | 276 | 52% | 2066 | 25% |