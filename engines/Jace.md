# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1786<sub>(+34) | 2082<sub>(+43) | 2101<sub>(+19) |  |
| 1.5.1 | 2026-11-05 | 1752 | 2039 | 2082 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1737<sub>(-29) | 1953<sub>(-23) | 2036<sub>(+26) |  |
| 1.5.1 | 2026-11-05 | 1766 | 1976 | 2010 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-11-05 | 1766 | 1976 | 2010 |  |
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

Generated: 2026-11-20 05:39:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1752, 1786]
  line "E1: LTC (60.0+0.60s)" [2039, 2082]
  line "E1: VLTC (2m24s+1.12s)" [2082, 2101]
  line "P1: STC (8.0+0.08s)" [1766, 1737]
  line "P1: LTC (60.0+0.60s)" [1976, 1953]
  line "P1: VLTC (2m24s+1.12s)" [2010, 2036]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 58 | 108 | 53% | 2006 | 19% |
|  |  | E1 | 2101 | 46 | 168 | 43% | 2191 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1953 | 87 | 44 | 47% | 1990 | 25% |
|  |  | E1 | 2082 | 43 | 202 | 45% | 2194 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1737 | 65 | 80 | 53% | 1709 | 25% |
|  |  | E1 | 1786 | 51 | 136 | 46% | 1821 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2010 | 40 | 244 | 44% | 2056 | 18% |
|  |  | E1 | 2082 | 33 | 344 | 46% | 2125 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1976 | 45 | 174 | 49% | 1989 | 24% |
|  |  | E1 | 2039 | 38 | 256 | 51% | 2026 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1766 | 42 | 204 | 52% | 1748 | 20% |
|  |  | E1 | 1752 | 37 | 262 | 50% | 1752 | 18% |