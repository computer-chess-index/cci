# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 790<sub>(-2158) | 2022<sub>(-1159) | 1169<sub>(-2074) |  |
| 2.1 | 2025-11-25 | 2948<sub>(+new) | 3181<sub>(+new) | 3243<sub>(+new) |  |
| 2.0 | 2025-08-30 |  |  |  |  |
| 1.0 | 2025-05-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:41:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 700 --> 3300
  line "STC (8.0+0.08s)" [2948, 790]
  line "STC (8.0+0.08s)" [2948, 790]
  line "LTC (60.0+0.60s)" [3181, 2022]
  line "VLTC (2m24s+1.12s)" [3243, 1169]
  line "VLTC (2m24s+1.12s)" [3243, 1169]
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
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 700 --> 3300
  line "STC (8.0+0.08s)" [2948, 790]
  line "STC (8.0+0.08s)" [2948, 790]
  line "LTC (60.0+0.60s)" [3181, 2022]
  line "VLTC (2m24s+1.12s)" [3243, 1169]
  line "VLTC (2m24s+1.12s)" [3243, 1169]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1169 | 22 | 1582 | 21% | 1705 | 3% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2022 | 25 | 836 | 38% | 2201 | 2% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 790 | 38 | 376 | 46% | 965 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 22 | 564 | 54% | 3214 | 59% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3181 | 25 | 438 | 52% | 3162 | 63% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2948 | 23 | 552 | 50% | 2930 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |