# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2915<sub>(+26) | 3218<sub>(+28) | 3281<sub>(+32) |  |
| 2.7 | 2025-10-18 | 2889<sub>(+new) | 3190<sub>(+new) | 3249<sub>(+new) |  |
| 2.6 | 2025-07-19 |  |  |  |  |
| 2.5 | 2025-03-03 |  |  |  |  |
| 2.4 | 2024-11-30 |  |  |  |  |
| 2.3.1 | 2024-09-25 |  |  |  |  |
| 2.3 | 2024-09-18 |  |  |  |  |
| 2.2 | 2024-07-20 |  |  |  |  |
| 2.1 | 2024-05-17 |  |  |  |  |
| 2.0 | 2024-05-02 |  |  |  |  |
| 1.12 | 2024-01-31 |  |  |  |  |
| 1.11.1 | 2023-11-21 |  |  |  |  |
| 1.11 | 2023-11-17 |  |  |  |  |
| 1.10 | 2023-10-22 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arcanum+<version>&body=###%20Engine%20name%0AArcanum%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:22:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2889, 2915]
  line "STC (8.0+0.08s)" [2889, 2915]
  line "LTC (60.0+0.60s)" [3190, 3218]
  line "VLTC (2m24s+1.12s)" [3249, 3281]
  line "VLTC (2m24s+1.12s)" [3249, 3281]
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
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2889, 2915]
  line "STC (8.0+0.08s)" [2889, 2915]
  line "LTC (60.0+0.60s)" [3190, 3218]
  line "VLTC (2m24s+1.12s)" [3249, 3281]
  line "VLTC (2m24s+1.12s)" [3249, 3281]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 28 | 342 | 51% | 3274 | 63% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3218 | 28 | 348 | 50% | 3212 | 55% |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2915 | 29 | 344 | 51% | 2905 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 27 | 394 | 54% | 3216 | 56% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 26 | 424 | 50% | 3173 | 57% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2889 | 23 | 554 | 49% | 2888 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |