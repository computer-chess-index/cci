# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1763<sub>(+8) | 2037<sub>(-2) | 2111<sub>(+28) |  |
| 1.5.1 | 2026-11-05 | 1755<sub>(+51) | 2039<sub>(+64) | 2083<sub>(+12) |  |
| 1.4 | 2026-10-15 | 1704 | 1975 | 2071 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1746<sub>(-33) | 1993<sub>(+10) | 2036<sub>(+8) |  |
| 1.5.1 | 2026-11-05 | 1779<sub>(+63) | 1983<sub>(+48) | 2028<sub>(-19) |  |
| 1.4 | 2026-10-15 | 1716 | 1935 | 2047 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-15 | 1716 | 1935 | 2047 |  |
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

Generated: 2026-11-28 05:39:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1704, 1755, 1763]
  line "E1: LTC (60.0+0.60s)" [1975, 2039, 2037]
  line "E1: VLTC (2m24s+1.12s)" [2071, 2083, 2111]
  line "P1: STC (8.0+0.08s)" [1716, 1779, 1746]
  line "P1: LTC (60.0+0.60s)" [1935, 1983, 1993]
  line "P1: VLTC (2m24s+1.12s)" [2047, 2028, 2036]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 45 | 176 | 51% | 2028 | 19% |
|  |  | E1 | 2111 | 43 | 196 | 45% | 2176 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1993 | 57 | 100 | 50% | 1997 | 30% |
|  |  | E1 | 2037 | 36 | 292 | 43% | 2147 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1746 | 57 | 104 | 52% | 1724 | 23% |
|  |  | E1 | 1763 | 46 | 174 | 45% | 1813 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2083 | 33 | 344 | 46% | 2126 | 21% |
|  |  | P1 | 2028 | 40 | 244 | 44% | 2072 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2039 | 38 | 256 | 51% | 2028 | 20% |
|  |  | P1 | 1983 | 44 | 178 | 48% | 2006 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1755 | 37 | 262 | 50% | 1755 | 18% |
|  |  | P1 | 1779 | 42 | 204 | 52% | 1760 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2047 | 56 | 112 | 51% | 2032 | 19% |
|  |  | E1 | 2071 | 42 | 202 | 53% | 2037 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1935 | 56 | 108 | 49% | 1948 | 25% |
|  |  | E1 | 1975 | 35 | 282 | 54% | 1941 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1716 | 53 | 128 | 49% | 1727 | 20% |
|  |  | E1 | 1704 | 49 | 150 | 47% | 1729 | 17% |