# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1586<sub>(-27) | 2111<sub>(+24) | 2215<sub>(-68) |  |
| 6.2 | 2025-09-16 | 1613 | 2087 | 2283 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1636<sub>(-107) | 2039<sub>(-120) | 2179<sub>(+8) |  |
| 6.2 | 2025-09-16 | 1743 | 2159 | 2171 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1871<sub>(+12) | 2215<sub>(0) | 2303<sub>(0) |  |
| 6.2 | 2025-09-16 | 1859 | 2215 | 2303 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:37:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1500 --> 2300
  line "E1: STC (8.0+0.08s)" [1613, 1586]
  line "E1: LTC (60.0+0.60s)" [2087, 2111]
  line "E1: VLTC (2m24s+1.12s)" [2283, 2215]
  line "P1: STC (8.0+0.08s)" [1743, 1636]
  line "P1: LTC (60.0+0.60s)" [2159, 2039]
  line "P1: VLTC (2m24s+1.12s)" [2171, 2179]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2400
  line "T1: STC (8.0+0.08s)" [1859, 1871]
  line "T1: LTC (60.0+0.60s)" [2215, 2215]
  line "T1: VLTC (2m24s+1.12s)" [2303, 2303]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2179 | 40 | 260 | 55% | 2041 | 19% |
|  |  | E1 | 2215 | 31 | 376 | 56% | 2097 | 25% |
|  |  | T1 | 2303 | 30 | 376 | 50% | 2303 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2039 | 40 | 256 | 55% | 1933 | 19% |
|  |  | E1 | 2111 | 32 | 372 | 54% | 2040 | 20% |
|  |  | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1636 | 37 | 278 | 58% | 1523 | 21% |
|  |  | E1 | 1586 | 32 | 376 | 53% | 1532 | 18% |
|  |  | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  |  | P1 | 2171 | 78 | 80 | 31% | 2483 | 16% |
|  |  | E1 | 2283 | 63 | 90 | 46% | 2361 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  |  | P1 | 2159 | 91 | 60 | 40% | 2290 | 10% |
|  |  | E1 | 2087 | 59 | 110 | 50% | 2093 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |
|  |  | P1 | 1743 | 63 | 90 | 42% | 1843 | 24% |
|  |  | E1 | 1613 | 55 | 140 | 45% | 1725 | 11% |