# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2294<sub>(+35) | 2709<sub>(+32) | 2882<sub>(+86) |  |
| 1.4 | 2011-02-01 | 2259 | 2677 | 2796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2282<sub>(0) | 2688<sub>(+53) | 2757<sub>(+68) |  |
| 1.4 | 2011-02-01 | 2282 | 2635 | 2689 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2403<sub>(+55) | 2722<sub>(-19) | 2843<sub>(+12) |  |
| 1.4 | 2011-02-01 | 2348 | 2741 | 2831 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spike+<version>&body=###%20Engine%20name%0ASpike%0A%0A###%20Version%0A1.4.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:43:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2259, 2294]
  line "E1: LTC (60.0+0.60s)" [2677, 2709]
  line "E1: VLTC (2m24s+1.12s)" [2796, 2882]
  line "P1: STC (8.0+0.08s)" [2282, 2282]
  line "P1: LTC (60.0+0.60s)" [2635, 2688]
  line "P1: VLTC (2m24s+1.12s)" [2689, 2757]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2348, 2403]
  line "T1: LTC (60.0+0.60s)" [2741, 2722]
  line "T1: VLTC (2m24s+1.12s)" [2831, 2843]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2843 | 35 | 258 | 51% | 2839 | 35% |
|  |  | P1 | 2757 | 33 | 318 | 45% | 2805 | 31% |
|  |  | E1 | 2882 | 28 | 418 | 51% | 2865 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  |  | P1 | 2688 | 33 | 308 | 50% | 2689 | 31% |
|  |  | E1 | 2709 | 29 | 396 | 46% | 2750 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
|  |  | P1 | 2282 | 36 | 260 | 48% | 2307 | 27% |
|  |  | E1 | 2294 | 29 | 434 | 48% | 2302 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2796 | 62 | 96 | 53% | 2718 | 23% |
|  |  | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2689 | 60 | 96 | 52% | 2638 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | P1 | 2635 | 68 | 84 | 56% | 2466 | 19% |
|  |  | E1 | 2677 | 56 | 120 | 55% | 2556 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | P1 | 2282 | 59 | 116 | 44% | 2269 | 25% |
|  |  | E1 | 2259 | 58 | 116 | 52% | 2205 | 18% |