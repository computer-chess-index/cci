# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1617<sub>(-15) | 2129<sub>(+36) | 2226<sub>(-168) |  |
| 6.2 | 2025-09-16 | 1632 | 2093 | 2394 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1639<sub>(-147) | 2026<sub>(-264) | 2171<sub>(-144) |  |
| 6.2 | 2025-09-16 | 1786 | 2290 | 2315 |  |
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

Generated: 2026-11-14 05:37:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1600 --> 2400
  line "E1: STC (8.0+0.08s)" [1632, 1617]
  line "E1: LTC (60.0+0.60s)" [2093, 2129]
  line "E1: VLTC (2m24s+1.12s)" [2394, 2226]
  line "P1: STC (8.0+0.08s)" [1786, 1639]
  line "P1: LTC (60.0+0.60s)" [2290, 2026]
  line "P1: VLTC (2m24s+1.12s)" [2315, 2171]
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
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 30 | 376 | 50% | 2303 | 30% |
|  |  | P1 | 2171 | 42 | 236 | 57% | 2009 | 19% |
|  |  | E1 | 2226 | 33 | 348 | 56% | 2099 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2215 | 31 | 354 | 53% | 2184 | 23% |
|  |  | P1 | 2026 | 41 | 244 | 56% | 1899 | 18% |
|  |  | E1 | 2129 | 32 | 360 | 54% | 2056 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1871 | 29 | 438 | 48% | 1886 | 20% |
|  |  | P1 | 1639 | 38 | 266 | 58% | 1519 | 21% |
|  |  | E1 | 1617 | 33 | 354 | 54% | 1558 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2303 | 27 | 468 | 49% | 2313 | 30% |
|  |  | P1 | 2315 | 126 | 36 | 26% | 2700 | 19% |
|  |  | E1 | 2394 | 90 | 46 | 52% | 2430 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2290 | 151 | 28 | 39% | 2383 | 7% |
|  |  | E1 | 2093 | 90 | 50 | 51% | 2095 | 14% |
|  |  | T1 | 2215 | 27 | 452 | 50% | 2207 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1786 | 97 | 40 | 41% | 1922 | 23% |
|  |  | E1 | 1632 | 76 | 82 | 41% | 1833 | 9% |
|  |  | T1 | 1859 | 25 | 584 | 51% | 1848 | 20% |