# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 1985<sub>(+728) | 2489<sub>(+912) | 2650<sub>(+1025) |  |
| 3.8.51 | 2025-08-10 | 1257 | 1577 | 1625 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2067<sub>(+857) | 2514<sub>(+1071) | 2628<sub>(+1003) |  |
| 3.8.51 | 2025-08-10 | 1210 | 1443 | 1625 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2298<sub>(+1041) | 2530<sub>(+1000) | 2654<sub>(+999) |  |
| 3.8.51 | 2025-08-10 | 1257 | 1530 | 1655 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scoria+<version>&body=###%20Engine%20name%0AScoria%0A%0A###%20Version%0A4.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:42:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "E1: STC (8.0+0.08s)" [1257, 1985]
  line "E1: LTC (60.0+0.60s)" [1577, 2489]
  line "E1: VLTC (2m24s+1.12s)" [1625, 2650]
  line "P1: STC (8.0+0.08s)" [1210, 2067]
  line "P1: LTC (60.0+0.60s)" [1443, 2514]
  line "P1: VLTC (2m24s+1.12s)" [1625, 2628]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "T1: STC (8.0+0.08s)" [1257, 2298]
  line "T1: LTC (60.0+0.60s)" [1530, 2530]
  line "T1: VLTC (2m24s+1.12s)" [1655, 2654]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2654 | 30 | 372 | 49% | 2650 | 29% |
|  |  | P1 | 2628 | 37 | 246 | 52% | 2580 | 30% |
|  |  | E1 | 2650 | 33 | 308 | 48% | 2669 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2530 | 32 | 328 | 54% | 2468 | 31% |
|  |  | P1 | 2514 | 36 | 276 | 50% | 2483 | 27% |
|  |  | E1 | 2489 | 34 | 282 | 52% | 2464 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2298 | 34 | 300 | 52% | 2259 | 31% |
|  |  | P1 | 2067 | 39 | 238 | 53% | 2037 | 26% |
|  |  | E1 | 1985 | 33 | 346 | 50% | 1993 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1655 | 24 | 554 | 45% | 1724 | 42% |
|  |  | P1 | 1625 | 66 | 82 | 37% | 1856 | 37% |
|  |  | E1 | 1625 | 53 | 120 | 42% | 1805 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1530 | 26 | 498 | 49% | 1566 | 38% |
|  |  | P1 | 1443 | 56 | 112 | 41% | 1634 | 36% |
|  |  | E1 | 1577 | 52 | 128 | 45% | 1752 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1257 | 25 | 576 | 54% | 1196 | 34% |
|  |  | P1 | 1210 | 56 | 126 | 34% | 1457 | 27% |
|  |  | E1 | 1257 | 57 | 124 | 38% | 1509 | 25% |