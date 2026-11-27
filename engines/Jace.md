# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1763<sub>(+8) | 2039<sub>(-1) | 2113<sub>(+30) |  |
| 1.5.1 | 2026-11-05 | 1755<sub>(+51) | 2040<sub>(+65) | 2083<sub>(+11) |  |
| 1.4 | 2026-10-15 | 1704 | 1975 | 2072 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1746<sub>(-33) | 1990<sub>(+10) | 2034<sub>(+8) |  |
| 1.5.1 | 2026-11-05 | 1779<sub>(+64) | 1980<sub>(+51) | 2026<sub>(-18) |  |
| 1.4 | 2026-10-15 | 1715 | 1929 | 2044 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-15 | 1715 | 1929 | 2044 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Jace+<version>&body=###%20Engine%20name%0AJace%0A%0A###%20Version%0A1.5.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:39:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1704, 1755, 1763]
  line "E1: LTC (60.0+0.60s)" [1975, 2040, 2039]
  line "E1: VLTC (2m24s+1.12s)" [2072, 2083, 2113]
  line "P1: STC (8.0+0.08s)" [1715, 1779, 1746]
  line "P1: LTC (60.0+0.60s)" [1929, 1980, 1990]
  line "P1: VLTC (2m24s+1.12s)" [2044, 2026, 2034]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2113 | 43 | 196 | 45% | 2178 | 22% |
|  |  | P1 | 2034 | 45 | 176 | 51% | 2026 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2039 | 36 | 292 | 43% | 2147 | 23% |
|  |  | P1 | 1990 | 57 | 100 | 50% | 1994 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1763 | 46 | 174 | 45% | 1812 | 18% |
|  |  | P1 | 1746 | 57 | 104 | 52% | 1724 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2026 | 40 | 244 | 44% | 2071 | 18% |
|  |  | E1 | 2083 | 33 | 344 | 46% | 2128 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1980 | 44 | 178 | 48% | 2003 | 24% |
|  |  | E1 | 2040 | 38 | 256 | 51% | 2028 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1779 | 42 | 204 | 52% | 1760 | 20% |
|  |  | E1 | 1755 | 37 | 262 | 50% | 1755 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2072 | 43 | 194 | 54% | 2036 | 20% |
|  |  | P1 | 2044 | 58 | 104 | 51% | 2028 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1929 | 57 | 104 | 48% | 1947 | 25% |
|  |  | E1 | 1975 | 35 | 282 | 54% | 1941 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1715 | 53 | 128 | 49% | 1727 | 20% |
|  |  | E1 | 1704 | 49 | 150 | 47% | 1728 | 17% |