# Engine: Zeno

Author: Oswald Nounagnon

Home: https://github.com/Toudonou/zeno

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2084<sub>(+207) | 2314<sub>(+246) | 2437<sub>(+263) |  |
| 2.0 | 2026-03-08 | 1877 | 2068 | 2174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2032<sub>(+215) | 2310<sub>(+342) | 2341<sub>(+203) |  |
| 2.0 | 2026-03-08 | 1817 | 1968 | 2138 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-08-14 | 2133<sub>(+227) | 2388<sub>(+227) | 2421<sub>(+162) |  |
| 2.0 | 2026-03-08 | 1906 | 2161 | 2259 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeno+<version>&body=###%20Engine%20name%0AZeno%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:44:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1877, 2084]
  line "E1: LTC (60.0+0.60s)" [2068, 2314]
  line "E1: VLTC (2m24s+1.12s)" [2174, 2437]
  line "P1: STC (8.0+0.08s)" [1817, 2032]
  line "P1: LTC (60.0+0.60s)" [1968, 2310]
  line "P1: VLTC (2m24s+1.12s)" [2138, 2341]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "T1: STC (8.0+0.08s)" [1906, 2133]
  line "T1: LTC (60.0+0.60s)" [2161, 2388]
  line "T1: VLTC (2m24s+1.12s)" [2259, 2421]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2421 | 34 | 296 | 51% | 2408 | 27% |
|  |  | P1 | 2341 | 35 | 296 | 45% | 2414 | 28% |
|  |  | E1 | 2437 | 33 | 336 | 50% | 2434 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2310 | 36 | 296 | 45% | 2379 | 20% |
|  |  | E1 | 2314 | 31 | 372 | 48% | 2338 | 23% |
|  |  | T1 | 2388 | 34 | 304 | 51% | 2381 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2032 | 39 | 242 | 50% | 2045 | 20% |
|  |  | E1 | 2084 | 35 | 308 | 47% | 2124 | 20% |
|  |  | T1 | 2133 | 36 | 280 | 53% | 2101 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2259 | 30 | 384 | 49% | 2279 | 24% |
|  |  | P1 | 2138 | 69 | 90 | 50% | 2103 | 13% |
|  |  | E1 | 2174 | 57 | 122 | 53% | 2147 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2161 | 28 | 460 | 49% | 2168 | 21% |
|  |  | P1 | 1968 | 65 | 92 | 43% | 2048 | 13% |
|  |  | E1 | 2068 | 53 | 126 | 50% | 2083 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1906 | 27 | 482 | 48% | 1925 | 20% |
|  |  | P1 | 1817 | 72 | 82 | 41% | 1964 | 13% |
|  |  | E1 | 1877 | 58 | 122 | 45% | 2016 | 17% |