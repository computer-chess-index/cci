# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1944<sub>(-11) | 2857<sub>(+4) | 2951<sub>(+30) |  |
| 2 | 2026-10-01 | 1955<sub>(+334) | 2853<sub>(+310) | 2921<sub>(+318) |  |
| 1.1 | 2026-07-11 | 1621 | 2543 | 2603 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2484<sub>(+510) | 2986<sub>(+260) | 3245<sub>(+472) |  |
| 1.1 | 2026-07-11 | 1974 | 2726 | 2773 |  |
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

Generated: 2026-10-11 11:14:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2", "2", "1.1"]
  y-axis "Elo Rating" 1600 --> 3300
  line "E1: STC (8.0+0.08s)" [1944, 1955, 1621]
  line "E1: LTC (60.0+0.60s)" [2857, 2853, 2543]
  line "E1: VLTC (2m24s+1.12s)" [2951, 2921, 2603]
  line "P1: STC (8.0+0.08s)" [1974, 2484]
  line "P1: LTC (60.0+0.60s)" [2726, 2986]
  line "P1: VLTC (2m24s+1.12s)" [2773, 3245]
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
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 100 | 32 | 64% | 3093 | 41% |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 75 | 58 | 55% | 2873 | 31% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2986 | 101 | 30 | 65% | 2869 | 43% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2853 | 84 | 44 | 59% | 2770 | 41% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2857 | 88 | 40 | 60% | 2768 | 40% |
| 2 | STC <sub>(8.0+0.08s)</sub> | 2484 | 114 | 36 | 65% | 2290 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 1955 | 88 | 48 | 60% | 1850 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 1944 | 109 | 32 | 64% | 1805 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 31 | 302 | 50% | 2736 | 52% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2773 | 45 | 140 | 51% | 2763 | 47% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2603 | 47 | 136 | 53% | 2579 | 44% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 27 | 404 | 50% | 2688 | 45% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2726 | 50 | 126 | 54% | 2687 | 40% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2543 | 45 | 156 | 50% | 2542 | 37% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2380 | 26 | 448 | 47% | 2404 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1974 | 42 | 200 | 49% | 2001 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1621 | 48 | 162 | 46% | 1671 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2539 | 32 | 316 | 50% | 2533 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 30 | 368 | 56% | 2368 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2097 | 36 | 276 | 52% | 2066 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |