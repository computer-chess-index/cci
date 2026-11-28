# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1586<sub>(-29) | 2103<sub>(+10) | 2221<sub>(-89) |  |
| 6.2 | 2025-09-16 | 1615 | 2093 | 2310 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1642<sub>(-63) | 2060<sub>(-38) | 2202<sub>(-3) |  |
| 6.2 | 2025-09-16 | 1705 | 2098 | 2205 |  |
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

Generated: 2026-11-28 05:37:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1500 --> 2400
  line "E1: STC (8.0+0.08s)" [1615, 1586]
  line "E1: LTC (60.0+0.60s)" [2093, 2103]
  line "E1: VLTC (2m24s+1.12s)" [2310, 2221]
  line "P1: STC (8.0+0.08s)" [1705, 1642]
  line "P1: LTC (60.0+0.60s)" [2098, 2060]
  line "P1: VLTC (2m24s+1.12s)" [2205, 2202]
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
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2221 | 31 | 388 | 56% | 2105 | 25% |
|  |  | T1 | 2303 | 30 | 376 | 50% | 2303 | 30% |
|  |  | P1 | 2202 | 39 | 266 | 55% | 2066 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2103 | 30 | 400 | 53% | 2049 | 21% |
|  |  | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  |  | P1 | 2060 | 37 | 298 | 55% | 1966 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
|  |  | P1 | 1642 | 36 | 294 | 57% | 1534 | 21% |
|  |  | E1 | 1586 | 31 | 396 | 53% | 1536 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  |  | P1 | 2205 | 62 | 112 | 37% | 2419 | 21% |
|  |  | E1 | 2310 | 58 | 108 | 48% | 2357 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  |  | P1 | 2098 | 58 | 124 | 42% | 2210 | 17% |
|  |  | E1 | 2093 | 55 | 124 | 50% | 2098 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |
|  |  | P1 | 1705 | 53 | 128 | 40% | 1818 | 24% |
|  |  | E1 | 1615 | 55 | 144 | 45% | 1723 | 10% |