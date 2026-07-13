# Engine: Quanticade

Author: Martin Botka

Home: https://github.com/Quanticade/Quanticade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2025-12-15 | 3333<sub>(+46) | 3505<sub>(+44) | 3534<sub>(+32) |  |
| 2.0 | 2025-05-21 | 3287<sub>(+new) | 3461<sub>(+new) | 3502<sub>(+new) |  |
| 1.0 Fenrir | 2025-03-10 |  |  |  |  |
| 1.2 Chimera | 2025-01-06 |  |  |  |  |
| 1.1 Chimera | 2025-01-02 |  |  |  |  |
| 1.0 Chimera | 2025-01-01 |  |  |  |  |
| 0.9 Electra | 2024-10-26 |  |  |  |  |
| 0.8.1 Aurora | 2024-09-11 |  |  |  |  |
| 0.8 Aurora | 2024-08-23 |  |  |  |  |
| 0.7 | 2024-07-19 |  |  |  |  |
| 0.6b | 2024-07-09 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quanticade+<version>&body=###%20Engine%20name%0AQuanticade%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:41:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3287, 3333]
  line "STC (8.0+0.08s)" [3287, 3333]
  line "LTC (60.0+0.60s)" [3461, 3505]
  line "VLTC (2m24s+1.12s)" [3502, 3534]
  line "VLTC (2m24s+1.12s)" [3502, 3534]
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
  x-axis ["2.0", "3.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3287, 3333]
  line "STC (8.0+0.08s)" [3287, 3333]
  line "LTC (60.0+0.60s)" [3461, 3505]
  line "VLTC (2m24s+1.12s)" [3502, 3534]
  line "VLTC (2m24s+1.12s)" [3502, 3534]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 24 | 404 | 51% | 3530 | 90% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 24 | 414 | 50% | 3505 | 87% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 21 | 578 | 50% | 3332 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 26 | 340 | 50% | 3498 | 84% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 26 | 352 | 50% | 3457 | 81% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 3287 | 25 | 414 | 52% | 3274 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |