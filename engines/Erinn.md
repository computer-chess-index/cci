# Engine: Erinn

Author: Elias Niemann

Home: https://github.com/NichtElias/Erinn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2211<sub>(+267) | 2936<sub>(+79) | 3001<sub>(+50) |  |
| 2 | 2026-10-01 | 1944<sub>(+238) | 2857<sub>(+256) | 2951<sub>(+279) |  |
| 1.1 | 2026-07-11 | 1706 | 2601 | 2672 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2 | 2026-10-01 | 2404<sub>(+507) | 2903<sub>(+330) | 2977<sub>(+353) |  |
| 1.1 | 2026-07-11 | 1897 | 2573 | 2624 |  |
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

Generated: 2026-11-21 05:38:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1", "2", "2"]
  y-axis "Elo Rating" 1700 --> 3100
  line "E1: STC (8.0+0.08s)" [1706, 1944, 2211]
  line "E1: LTC (60.0+0.60s)" [2601, 2857, 2936]
  line "E1: VLTC (2m24s+1.12s)" [2672, 2951, 3001]
  line "P1: STC (8.0+0.08s)" [1897, 2404]
  line "P1: LTC (60.0+0.60s)" [2573, 2903]
  line "P1: VLTC (2m24s+1.12s)" [2624, 2977]
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
| 2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2977 | 34 | 260 | 47% | 2998 | 47% |
|  |  | E1 | 3001 | 31 | 318 | 50% | 3000 | 45% |
|  |  | E1 | 2951 | 89 | 44 | 59% | 2865 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2903 | 33 | 278 | 52% | 2886 | 45% |
|  |  | E1 | 2936 | 30 | 334 | 51% | 2928 | 43% |
|  |  | E1 | 2857 | 88 | 40 | 60% | 2768 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2211 | 29 | 468 | 58% | 2117 | 15% |
|  |  | E1 | 1944 | 109 | 32 | 64% | 1805 | 16% |
|  |  | P1 | 2404 | 41 | 232 | 52% | 2388 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2736 | 31 | 302 | 50% | 2736 | 52% |
|  |  | P1 | 2624 | 39 | 192 | 49% | 2628 | 46% |
|  |  | E1 | 2672 | 41 | 184 | 53% | 2620 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2681 | 27 | 404 | 50% | 2688 | 45% |
|  |  | P1 | 2573 | 43 | 174 | 50% | 2579 | 38% |
|  |  | E1 | 2601 | 41 | 186 | 50% | 2608 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2380 | 26 | 448 | 47% | 2404 | 40% |
|  |  | P1 | 1897 | 38 | 250 | 53% | 1867 | 20% |
|  |  | E1 | 1706 | 43 | 206 | 49% | 1719 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2539 | 32 | 316 | 50% | 2533 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2433 | 30 | 368 | 56% | 2368 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2097 | 36 | 276 | 52% | 2066 | 25% |