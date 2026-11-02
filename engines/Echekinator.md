# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2271<sub>(+475) | 2573<sub>(+513) | 2631<sub>(+541) |  |
| 1.0 | 2025-11-25 | 1796 | 2060 | 2090 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2199<sub>(+382) | 2562<sub>(+575) | 2676<sub>(+569) |  |
| 1.0 | 2025-11-25 | 1817 | 1987 | 2107 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-02 05:37:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2"]
  y-axis "Elo Rating" 1700 --> 2700
  line "E1: STC (8.0+0.08s)" [1796, 2271]
  line "E1: LTC (60.0+0.60s)" [2060, 2573]
  line "E1: VLTC (2m24s+1.12s)" [2090, 2631]
  line "P1: STC (8.0+0.08s)" [1817, 2199]
  line "P1: LTC (60.0+0.60s)" [1987, 2562]
  line "P1: VLTC (2m24s+1.12s)" [2107, 2676]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2676 | 46 | 152 | 54% | 2635 | 35% |
|  |  | E1 | 2631 | 37 | 258 | 50% | 2631 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2562 | 48 | 148 | 52% | 2530 | 26% |
|  |  | E1 | 2573 | 38 | 254 | 49% | 2584 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2199 | 49 | 150 | 48% | 2214 | 20% |
|  |  | E1 | 2271 | 38 | 248 | 49% | 2283 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2107 | 51 | 156 | 54% | 2055 | 15% |
|  |  | E1 | 2090 | 42 | 208 | 45% | 2191 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1987 | 46 | 164 | 49% | 2010 | 25% |
|  |  | E1 | 2060 | 40 | 228 | 45% | 2138 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1817 | 40 | 216 | 50% | 1817 | 23% |
|  |  | E1 | 1796 | 42 | 204 | 50% | 1798 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |