# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1944<sub>(-246) | 2857<sub>(-136) | 2951<sub>(-119) |  |
| 2 | 2026-10-01 | 2190<sub>(+459) | 2993<sub>(+329) | 3070<sub>(+346) |  |
| 1.1 | 2026-07-11 | 1731 | 2664 | 2724 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2573<sub>(+579) | 3101<sub>(+335) | 3195<sub>(+383) |  |
| 1.1 | 2026-07-11 | 1994 | 2766 | 2812 |  |
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

Generated: 2026-11-05 05:38:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1700 --> 3200
  line "E1: STC (8.0+0.08s)" [1731, 2190, 1944]
  line "E1: LTC (60.0+0.60s)" [2664, 2993, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2724, 3070, 2951]
  line "P1: STC (8.0+0.08s)" [1994, 2573]
  line "P1: LTC (60.0+0.60s)" [2766, 3101]
  line "P1: VLTC (2m24s+1.12s)" [2812, 3195]
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
|  |  | P1 | 3195 | 39 | 190 | 47% | 3220 | 49% |
|  |  | E1 | 3070 | 36 | 226 | 52% | 3051 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2857 | 88 | 40 | 60% | 2768 | 40% |
|  |  | P1 | 3101 | 41 | 182 | 55% | 3056 | 45% |
|  |  | E1 | 2993 | 32 | 286 | 51% | 2986 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1944 | 109 | 32 | 64% | 1805 | 16% |
|  |  | P1 | 2573 | 43 | 200 | 52% | 2541 | 16% |
|  |  | E1 | 2190 | 35 | 314 | 55% | 2138 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2724 | 46 | 140 | 53% | 2700 | 46% |
|  |  | T1 | 2736 | 31 | 302 | 50% | 2736 | 52% |
|  |  | P1 | 2812 | 45 | 140 | 51% | 2804 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2664 | 45 | 156 | 50% | 2664 | 37% |
|  |  | T1 | 2681 | 27 | 404 | 50% | 2688 | 45% |
|  |  | P1 | 2766 | 50 | 126 | 54% | 2727 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2380 | 26 | 448 | 47% | 2404 | 40% |
|  |  | P1 | 1994 | 43 | 200 | 49% | 2021 | 21% |
|  |  | E1 | 1731 | 48 | 162 | 46% | 1781 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2539 | 32 | 316 | 50% | 2533 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2433 | 30 | 368 | 56% | 2368 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2097 | 36 | 276 | 52% | 2066 | 25% |