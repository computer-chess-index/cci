# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 1944<sub>(-92) | 2857<sub>(-37) | 2951<sub>(+36) |  |
| 2 | 2026-10-01 | 2036<sub>(+413) | 2894<sub>(+347) | 2915<sub>(+308) |  |
| 1.1 | 2026-07-11 | 1623 | 2547 | 2607 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2577<sub>(+634) | 3011<sub>(+315) | 3163<sub>(+422) |  |
| 1.1 | 2026-07-11 | 1943 | 2696 | 2741 |  |
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

Generated: 2026-10-13 04:38:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1600 --> 3200
  line "E1: STC (8.0+0.08s)" [1623, 2036, 1944]
  line "E1: LTC (60.0+0.60s)" [2547, 2894, 2857]
  line "E1: VLTC (2m24s+1.12s)" [2607, 2915, 2951]
  line "P1: STC (8.0+0.08s)" [1943, 2577]
  line "P1: LTC (60.0+0.60s)" [2696, 3011]
  line "P1: VLTC (2m24s+1.12s)" [2741, 3163]
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
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 68 | 64 | 52% | 3125 | 45% |
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 48 | 128 | 50% | 2911 | 42% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2857 | 88 | 40 | 60% | 2768 | 40% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 3011 | 65 | 70 | 60% | 2927 | 49% |
| 2 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 52 | 114 | 56% | 2844 | 41% |
| 2 | STC <sub>(8.0+0.08s)</sub> | 1944 | 109 | 32 | 64% | 1805 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 2577 | 82 | 68 | 64% | 2392 | 4% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | STC <sub>(8.0+0.08s)</sub> | 2036 | 55 | 126 | 59% | 1948 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 46 | 140 | 53% | 2583 | 46% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2736 | 31 | 302 | 50% | 2736 | 52% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2741 | 45 | 140 | 51% | 2732 | 47% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 45 | 156 | 50% | 2546 | 37% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2681 | 27 | 404 | 50% | 2688 | 45% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2696 | 50 | 126 | 54% | 2655 | 40% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1623 | 48 | 162 | 46% | 1673 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2380 | 26 | 448 | 47% | 2404 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 1943 | 42 | 200 | 49% | 1968 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2539 | 32 | 316 | 50% | 2533 | 35% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2433 | 30 | 368 | 56% | 2368 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2097 | 36 | 276 | 52% | 2066 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |