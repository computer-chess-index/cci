# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2214<sub>(+270) | 2946<sub>(+89) | 3006<sub>(+55) |  |
| 2 | 2026-10-01 | 1944<sub>(+234) | 2857<sub>(+251) | 2951<sub>(+277) |  |
| 1.1 | 2026-07-11 | 1710 | 2606 | 2674 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2400<sub>(+509) | 2897<sub>(+339) | 2967<sub>(+349) |  |
| 1.1 | 2026-07-11 | 1891 | 2558 | 2618 |  |
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

Generated: 2026-11-20 05:38:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1700 --> 3100
  line "E1: STC (8.0+0.08s)" [1710, 1944, 2214]
  line "E1: LTC (60.0+0.60s)" [2606, 2857, 2946]
  line "E1: VLTC (2m24s+1.12s)" [2674, 2951, 3006]
  line "P1: STC (8.0+0.08s)" [1891, 2400]
  line "P1: LTC (60.0+0.60s)" [2558, 2897]
  line "P1: VLTC (2m24s+1.12s)" [2618, 2967]
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
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2967 | 34 | 256 | 47% | 2990 | 48% |
|  |  | E1 | 3006 | 31 | 310 | 50% | 3004 | 45% |
|  |  | E1 | 2951 | 89 | 44 | 59% | 2865 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2897 | 33 | 270 | 53% | 2878 | 45% |
|  |  | E1 | 2946 | 30 | 330 | 51% | 2932 | 43% |
|  |  | E1 | 2857 | 88 | 40 | 60% | 2768 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2400 | 41 | 224 | 51% | 2384 | 15% |
|  |  | E1 | 2214 | 29 | 464 | 58% | 2121 | 15% |
|  |  | E1 | 1944 | 109 | 32 | 64% | 1805 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2736 | 31 | 302 | 50% | 2736 | 52% |
|  |  | P1 | 2618 | 39 | 192 | 49% | 2623 | 46% |
|  |  | E1 | 2674 | 41 | 184 | 53% | 2623 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2681 | 27 | 404 | 50% | 2688 | 45% |
|  |  | P1 | 2558 | 44 | 166 | 49% | 2574 | 39% |
|  |  | E1 | 2606 | 41 | 186 | 50% | 2612 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2380 | 26 | 448 | 47% | 2404 | 40% |
|  |  | P1 | 1891 | 39 | 246 | 53% | 1864 | 20% |
|  |  | E1 | 1710 | 43 | 206 | 49% | 1723 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2539 | 32 | 316 | 50% | 2533 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2433 | 30 | 368 | 56% | 2368 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2097 | 36 | 276 | 52% | 2066 | 25% |