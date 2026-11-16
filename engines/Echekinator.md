# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2627<sub>(+385) | 2930<sub>(+400) | 2959<sub>(+368) |  |
| 1.2 | 2026-10-14 | 2242<sub>(+487) | 2530<sub>(+505) | 2591<sub>(+536) |  |
| 1.0 | 2025-11-25 | 1755 | 2025 | 2055 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2620<sub>(+525) | 2858<sub>(+441) | 2939<sub>(+410) |  |
| 1.2 | 2026-10-14 | 2095<sub>(+356) | 2417<sub>(+522) | 2529<sub>(+507) |  |
| 1.0 | 2025-11-25 | 1739 | 1895 | 2022 |  |
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

Generated: 2026-11-16 05:37:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1700 --> 3000
  line "E1: STC (8.0+0.08s)" [1755, 2242, 2627]
  line "E1: LTC (60.0+0.60s)" [2025, 2530, 2930]
  line "E1: VLTC (2m24s+1.12s)" [2055, 2591, 2959]
  line "P1: STC (8.0+0.08s)" [1739, 2095, 2620]
  line "P1: LTC (60.0+0.60s)" [1895, 2417, 2858]
  line "P1: VLTC (2m24s+1.12s)" [2022, 2529, 2939]
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
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2959 | 32 | 300 | 52% | 2936 | 41% |
|  |  | P1 | 2939 | 40 | 178 | 49% | 2943 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2930 | 27 | 432 | 48% | 2942 | 42% |
|  |  | P1 | 2858 | 37 | 222 | 49% | 2851 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2627 | 32 | 340 | 54% | 2584 | 27% |
|  |  | P1 | 2620 | 46 | 172 | 56% | 2561 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2529 | 44 | 166 | 53% | 2495 | 35% |
|  |  | E1 | 2591 | 34 | 294 | 49% | 2597 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2417 | 44 | 184 | 52% | 2377 | 25% |
|  |  | E1 | 2530 | 34 | 314 | 51% | 2502 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2095 | 45 | 176 | 47% | 2120 | 23% |
|  |  | E1 | 2242 | 34 | 316 | 47% | 2277 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2022 | 51 | 156 | 54% | 1972 | 15% |
|  |  | E1 | 2055 | 42 | 208 | 45% | 2156 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1895 | 46 | 164 | 49% | 1917 | 25% |
|  |  | E1 | 2025 | 40 | 228 | 45% | 2103 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1755 | 42 | 204 | 50% | 1758 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1739 | 40 | 216 | 50% | 1737 | 23% |