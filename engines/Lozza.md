# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2849<sub>(+250) | 3067<sub>(+179) | 3102<sub>(+117) |  |
| 9 | 2026-01-10 | 2599<sub>(+16) | 2888<sub>(-15) | 2985<sub>(-32) |  |
| 8 | 2025-09-25 | 2583<sub>(+new) | 2903<sub>(+new) | 3017<sub>(+new) |  |
| 7 | 2025-07-12 |  |  |  |  |
| 5.1 | 2025-06-02 |  |  |  |  |
| 5 | 2025-02-25 |  |  |  |  |
| 4 | 2025-01-06 |  |  |  |  |
| 3 | 2024-10-06 |  |  |  |  |
| 2.5 | 2023-02-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-15 17:26:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2583, 2599, 2849]
  line "STC (8.0+0.08s)" [2583, 2599, 2849]
  line "LTC (60.0+0.60s)" [2903, 2888, 3067]
  line "VLTC (2m24s+1.12s)" [3017, 2985, 3102]
  line "VLTC (2m24s+1.12s)" [3017, 2985, 3102]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2583, 2599, 2849]
  line "STC (8.0+0.08s)" [2583, 2599, 2849]
  line "LTC (60.0+0.60s)" [2903, 2888, 3067]
  line "VLTC (2m24s+1.12s)" [3017, 2985, 3102]
  line "VLTC (2m24s+1.12s)" [3017, 2985, 3102]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 26 | 418 | 51% | 3096 | 51% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 27 | 396 | 52% | 3040 | 50% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2849 | 24 | 556 | 48% | 2851 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2985 | 36 | 216 | 51% | 2974 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 40 | 182 | 48% | 2905 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2599 | 49 | 128 | 50% | 2601 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 38 | 198 | 51% | 3009 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2903 | 37 | 208 | 52% | 2884 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2583 | 43 | 176 | 51% | 2572 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |