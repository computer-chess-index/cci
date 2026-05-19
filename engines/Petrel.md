# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2927<sub>(+new) | 3146<sub>(+new) | 3177<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2950<sub>(+new) | 3175<sub>(+new) | 3195<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2921<sub>(+86) | 3116<sub>(+99) | 3170<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2835<sub>(+74) | 3017<sub>(+71) | 3102<sub>(+133) |  |
| 3.0 | 2025-11-26 | 2761<sub>(+528) | 2946<sub>(+528) | 2969<sub>(+480) |  |
| 2.1 | 2025-10-13 | 2233<sub>(+new) | 2418<sub>(+new) | 2489<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A3.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:27:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2233, 2761, 2835, 2921, 2950, 2927]
  line "STC (8.0+0.08s)" [2233, 2761, 2835, 2921, 2950, 2927]
  line "LTC (60.0+0.60s)" [2418, 2946, 3017, 3116, 3175, 3146]
  line "VLTC (2m24s+1.12s)" [2489, 2969, 3102, 3170, 3195, 3177]
  line "VLTC (2m24s+1.12s)" [2489, 2969, 3102, 3170, 3195, 3177]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 35 | 228 | 52% | 3160 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 42 | 158 | 53% | 3127 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2927 | 41 | 170 | 49% | 2938 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 104 | 24 | 58% | 3132 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3175 | 102 | 24 | 54% | 3137 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2950 | 110 | 24 | 50% | 2954 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3170 | 35 | 226 | 49% | 3182 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 33 | 260 | 52% | 3101 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2921 | 33 | 264 | 50% | 2923 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 35 | 232 | 51% | 3094 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3017 | 36 | 212 | 52% | 3000 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2835 | 37 | 224 | 48% | 2853 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 51 | 128 | 57% | 2892 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 43 | 184 | 59% | 2857 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2761 | 56 | 108 | 53% | 2718 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2489 | 57 | 110 | 48% | 2520 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2418 | 58 | 108 | 48% | 2437 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2233 | 62 | 88 | 51% | 2226 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |